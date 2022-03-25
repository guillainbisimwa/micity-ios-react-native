import React, { useEffect, useState } from "react";
import { Block, Button, Checkbox, Input, Select, Text } from "../components";
import { Image, StyleSheet, KeyboardAvoidingView, Keyboard, ScrollView, ToastAndroid, ActivityIndicator } from "react-native";
import { Colors, Layout, mocks } from "../constants";
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from "../api/api";

const Signup = ({navigation}) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [province, setProvince] = useState("");
    const [city, setCity] = useState("");
    const [address, setAddress] = useState("");
    const [load, setLoad] = useState(false);

    const [errors, setErrors] = useState({
        name :false,
        email :false,
        phone :false,
        password :false,
        confirmPassword :false,
        city :false,
        address :false,
        province:false,
      });

    useEffect(()=> {
        getData();
    },[]);

    const registerUser = async () => {
        setLoad(true);
        Keyboard.dismiss();

        errors.name = false;
        errors.email = false;
        errors.phone = false;
        errors.password = false;
        errors.confirmPassword = false;
        errors.city = false;
        errors.address = false;
        errors.province = false;
        setErrors({...errors})
  
        if(name.trim().length <= 3){
          errors.name = true;
          setErrors({...errors})
        }
  
        if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
          errors.email = true;
          setErrors({...errors})
        }
  
        if(phone.trim().length <= 6){
          errors.phone = true;
          setErrors({...errors})
        }
  
        if(password.trim().length <= 5){
          errors.password = true;
          setErrors({...errors})
        }
  
        if(confirmPassword.trim().length <= 5 || confirmPassword !== password ){
          errors.confirmPassword = true;
          setErrors({...errors})
        }
  
        if(city.trim().length <= 3){
          errors.city = true;
          setErrors({...errors})
        }
  
        if(address.trim().length <= 5){
          errors.address = true;
          setErrors({...errors})
        }
  
        if(province === ""){
          errors.province = true;
          setErrors({...errors})
        }
        console.log(errors);
        
        try{
            if( !errors.name &&
                !errors.email &&
                !errors.phone &&
                !errors.password &&
                !errors.confirmPassword &&
                !errors.city &&
                !errors.address &&
                !errors.province){   

                const rep = await api.post('/register', {
                    email: email,
                    password: password,
                    name: name, 
                    phone: phone,
                    type: 1, 
                    status: 0, 
                    province: province, 
                    city: city, 
                    address: address
                });
                
                console.log(rep.data);
                setPassword("");
                if(rep.data.hasOwnProperty('token')){
                    setPassword("");
                    setLoad(false)
                    setName("");
                    setEmail("");
                    setPassword("");
                    setConfirmPassword("");
                    setPhone("");
                    setProvince("");
                    setCity("");
                    setAddress("");
                    
                    setLoad(false)
                    storeData(rep.data.token, rep.data.user,);
                    getData();
                }
                setLoad(false)
            }else {
                ToastAndroid.show(`One or more field is invalid, please retry`, ToastAndroid.LONG);
                setLoad(false)
            }
        } catch(e){
            ToastAndroid.show(e.response.data.error_message, ToastAndroid.LONG);
            console.log(e);
           
        }
    };
    
    const storeData = async (value, user=null) => {
        try {
            await AsyncStorage.setItem('@token', value)
            await AsyncStorage.setItem('@user', JSON.stringify(user))
        } catch (e) {
          // saving error
          console.log('error');
        }
    }

    const getData = async () => {
        setLoad(true);
        try {
            const value = await AsyncStorage.getItem('@token');
            if(value !== null) {
                // value previously stored
                await navigation.navigate('Main');
            }
            setLoad(false);
          
        } catch(e) {
          // error reading value
          console.log('error', e);
        }  
    }

    return <ScrollView showsVerticalScrollIndicator={false}>
    <KeyboardAvoidingView style={styles.Signup} >
        <Block flex={1}  padding={50} color="white" animated>
            <Block flex={1} >
                <Block flex={1} center  middle >
                    <Image style={styles.logo} source={mocks.appConfig.logo2} />
                    <Text primary h1 bold center>Signup</Text>
                </Block>  
            </Block>
            <Block flex={5} >
                <Input
                    placeholder="Name"
                    error={errors.name}
                    defaultValue={name}
                    onChangeText={text => setName(text)}
                />

                <Input
                    email
                    placeholder="Email"
                    error={errors.email}
                    defaultValue={email}
                    onChangeText={text => setEmail(text)}
                />

                <Input
                    phone
                    placeholder="Phone number*"
                    error={errors.phone}
                    defaultValue={phone}
                    onChangeText={text => setPhone(text)}
                />

                <Input
                    secure
                    placeholder="Password"
                    error={errors.password}
                    defaultValue={password}
                    onChangeText={text => setPassword(text)}
                />

                <Input
                    secure
                    placeholder="Confirm Password"
                    error={errors.confirmPassword}
                    defaultValue={confirmPassword}
                    onChangeText={text => setConfirmPassword(text)}
                />

                <Select
                    placeholder="Province"
                    items={mocks.provinces}
                    value={province}
                    error={errors.province}
                    setValue={setProvince}
                />

                <Input
                    placeholder="City"
                    error={errors.city}
                    defaultValue={city}
                    onChangeText={text => setCity(text)}
                />

                <Input
                    placeholder="Address"
                    error={errors.address}
                    defaultValue={address}
                    onChangeText={text => setAddress(text)}
                />

                    {
                        load?
                        <ActivityIndicator size="large" color={Colors.danger} />: <>
                        <Block style={styles.m} >
                            <Button onPress={() => registerUser()} >
                                <Text white bold h2 center>Confirm</Text>
                            </Button>
                        </Block>
                        </>
                    }
             
               
                <Checkbox
                    checkboxStyle={{
                        borderWidth: 1,
                        borderRadius: 2,
                        borderColor: '#E3E3E3'
                    }}
                    color={Colors.primary}
                    labelStyle={{
                        color: Colors.warning,
                        fontFamily: 'montserrat-regular'
                    }}
                    label="I accept the conditions of use."
                    />
                      
                <Block flex={1} center>
               
                    <Button color="white" onPress={() => navigation.navigate("Login")} >
                        <Text 
                            grey
                            caption
                            center
                            style={{ textDecorationLine: "underline" }}
                        >
                            Login ?
                        </Text>
                    </Button>
                </Block>
            </Block>
        </Block>
    </KeyboardAvoidingView>
    </ScrollView>
};


const styles = StyleSheet.create({
    Signup: {
        flex: 1,
        justifyContent: "center",
        paddingTop:30,
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
    input: {
        borderWidth: 0,
      },
    hasErrors: {
        borderBottomColor: Colors.danger
    }
});

export default Signup;
