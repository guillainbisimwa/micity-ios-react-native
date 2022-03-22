import React, { useEffect, useState } from "react";
import { Block, Button, Text } from "../components";
import { ActivityIndicator, Image, StyleSheet } from "react-native";
import { Colors, Layout, mocks } from "../constants";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Welcome = ({navigation}) => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        setLoading(true);
        try {
            const value = await AsyncStorage.getItem('@token');
            console.log(value);
            if(value !== null) {
                // value previously stored
                await navigation.navigate('Main');
            };
            setLoading(false);
          
        } catch(e) {
          // error reading value
          console.log('error', e);
          setLoading(false);
        }  
    }

    // const {user, loading} = useSelector( (state) => state.user);

    // const [ userLoggedIn, setUserLoggedIn ] = useState(user);
    // const dispatch = useDispatch();

    // useEffect(()=> {
    //     dispatch( getUser());
    //     setUserLoggedIn(user);
    //     if(user.hasOwnProperty('token')){
    //         console.log('user');
    //         console.log(user);
    //         navigation.navigate('Main');
    //     }
    // },[])

    return <Block flex={1} padding={20} color="primary" animated>
            <Block flex={1} >
                <Block style={styles.bottom} >
                    <Image  style={styles.logo} source={mocks.appConfig.logo} />
                    <Text white h2 center>{mocks.appConfig.label}</Text>
                </Block>  
            </Block>
          
            <Block flex={1} middle>
            {
                loading?
                <ActivityIndicator size="large" color={Colors.danger} />: <>
                    <Button border onPress={() => navigation.navigate("Signup")}>
                        <Text white center h2 bold>Sign Up</Text>
                    </Button>
                    <Button color="white" onPress={() => navigation.navigate("Login")}>
                        <Text primary center h2 bold>Login</Text>
                    </Button>
                </>
            }
               
            </Block>
        </Block>
};


const styles = StyleSheet.create({
    logo: {
        height: Layout.window.width / 2.5,
        width: Layout.window.width / 2.5
    },
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
});

export default Welcome;
