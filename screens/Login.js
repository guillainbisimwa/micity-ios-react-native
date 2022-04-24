import React, { useEffect, useState } from "react";
import { Block, Button, Input, Text } from "../components";
import { Image, StyleSheet, Keyboard, ToastAndroid, ActivityIndicator } from "react-native";
import { Colors, Layout, mocks } from "../constants";
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from "../api/api";
import useSaveCat from "../hooks/useSaveCat";
import useSaveMin from "../hooks/useSaveMin";
import useSaveServ from "../hooks/useSaveServ";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


const Login = ({navigation}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [load, setLoad] = useState(false);

    const [errors, setErrors] = useState({
        email :false,
        password :false,
    });

    const [responseCat, loadingCat, hasErrorCat] = useSaveCat(`https://micity-backend.herokuapp.com/categories/`);
    const [responseMin, loadingMin, hasErrorMin] = useSaveMin(`https://micity-backend.herokuapp.com/municipalities/`);
    const [responseServ, loadingServ, hasErrorServ] = useSaveServ(`https://micity-backend.herokuapp.com/services/`);

    useEffect(()=> {
        getData();
    },[]);

    const storeData = async (value, user=null) => {
        try {
            await AsyncStorage.setItem('@token', value)
            await AsyncStorage.setItem('@user', JSON.stringify(user))
            //await AsyncStorage.setItem('@cat', JSON.stringify(responseCat))
        } catch (e) {
          // saving error
          console.log('error');
        }
    }

    const getData = async () => {
        setLoad(true);
        try {
            const value = await AsyncStorage.getItem('@token');
            if(value !== null ) {
                // value previously stored
                await navigation.navigate('Main');
            }
            const valueCat = await AsyncStorage.getItem('@cat');
            if(valueCat !== null ) {
                // value previously stored
                console.log(" ")
                console.log(" ")
                console.log("----------------Cat-----------");
                console.log(valueCat);
            }

            const valueMin = await AsyncStorage.getItem('@min');
            if(valueMin !== null ) {
                // value previously stored
                console.log(" ")
                console.log(" ")
                console.log("----------------Min-----------");
                console.log(valueMin);
            }

            const valueServ = await AsyncStorage.getItem('@serv');
            if(valueServ !== null ) {
                // value previously stored
                console.log(" ")
                console.log(" ")
                console.log("----------------Serv-----------");
                console.log(valueServ);
            }
            

            setLoad(false);
          
        } catch(e) {
          // error reading value
          console.log('error', e);
          setLoad(false);
        }  
    }

    const Signin = async () => {
        setLoad(true);
        Keyboard.dismiss();

        errors.email = false;
        errors.password = false;
        setErrors({...errors})

        if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        errors.email = true;
        setErrors({...errors})
        }
    
        if(password.trim().length <= 4){
        errors.password = true;
        setErrors({...errors})
        }

        try{
            if( !errors.email &&
                !errors.password){   

                const rep = await api.post('/signin', {
                    email: email,
                    password: password
                });
                setLoad(false)
                
                console.log(rep.data);
                setPassword("");
                if(rep.data.hasOwnProperty('token')){
                  
                    if(rep.data.user.status === 0) {
                        ToastAndroid.show(`This Email is not yet validated by Admin`, ToastAndroid.LONG);
                    }
                    else {
                        storeData(rep.data.token, rep.data.user);
                        getData();
                    }
                }else {
                    ToastAndroid.show(`Error occured, please retry`, ToastAndroid.LONG);
                }
                
        
                setLoad(false)
            }else {
                ToastAndroid.show(`Email is invalid, please retry`, ToastAndroid.LONG);
                setLoad(false)
            }
        } catch(e){
            console.log("bree");
            console.log(e);
            //ToastAndroid.show(e.response.data.error_message, ToastAndroid.LONG);
            ToastAndroid.show("Network Error, please retry", ToastAndroid.LONG);
            setPassword("");
            setLoad(false)
        }
    };

    return <KeyboardAwareScrollView style={{backgroundColor: "#fff"}} >
        <Block animated style={styles.login}>
            <Block flex={1} >
                <Block flex={1} center  middle >
                    <Image style={styles.logo} source={mocks.appConfig.logo2} />
                    <Text primary h1 bold center>Login</Text>
                </Block>  
            </Block>
            <Block flex={2}>
                <Input
                    placeholder="Email"
                    error={errors.email}
                    defaultValue={email}
                    onChangeText={text => setEmail(text)}
                />

                <Input
                    secure
                    placeholder="Password"
                    error={errors.password}
                    defaultValue={password}
                    onChangeText={text => setPassword(text)}
                />
                <Block style={styles.mt} >
                    <Button onPress={() => Signin()} >
                        <Text white bold h2 center>Login</Text>
                    </Button>
                </Block>
                <Block center >
                    <Button color="white" 
                    onPress={()=> navigation.navigate("Signup")} >
                    
                        <Text 
                            grey
                            caption
                            center
                            style={{ textDecorationLine: "underline" }}
                        >
                            Sign up?
                        </Text>
                    </Button>
                    {
                        load?
                        <ActivityIndicator size="large" color={Colors.danger} />: <></>
                    }
                </Block>
            </Block>
            <Block center >
                <Button color="white" 
                    onPress={()=> navigation.navigate("Forget")} >
                    
                    <Text 
                        grey
                        caption
                        center
                        style={{ textDecorationLine: "underline" }}
                    >
                        Forgot password?
                    </Text>
                </Button>
            </Block>
        </Block>
    </KeyboardAwareScrollView>
};


const styles = StyleSheet.create({
    login: {
        paddingTop:90,
        paddingLeft: 50,
        paddingRight: 50,
        backgroundColor: Colors.dark.text
    },
    logo: {
        height: Layout.window.width / 5,
        width: Layout.window.width / 5,
        marginBottom: 20
    },
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    mt: {
        marginTop: 25
    },
});

export default Login;
