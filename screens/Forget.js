import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Image,
  KeyboardAvoidingView,
  ToastAndroid,
  Keyboard,
  ActivityIndicator
} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Block, Button, Input, Text, } from '../components';
import { Colors, Layout } from '../constants';
import * as Icon from "@expo/vector-icons";
import api from "../api/api";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


const Forget = ({navigation}) =>{

  const [email, setEmail] = useState("");
  const [load, setLoad] = useState(false);

  const [errors, setErrors] = useState({
      email :false,
  });


  const checkEmail = async () => {
    setLoad(true);
    Keyboard.dismiss();

    errors.email = false;
    setErrors({...errors})

    if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
      errors.email = true;
      setErrors({...errors})
    }

    try{
        if( !errors.email){   

            const rep = await api.get(`/user/email/${email}`);
            setLoad(true)
            
            // console.log(rep.data[0]);
            if(rep.data[0]!== undefined && rep.data[0].hasOwnProperty('name')){
                ToastAndroid.show(`Success`, ToastAndroid.LONG);
                // console.log(rep.data[0]);
                sendMail(rep.data[0]);
            }
            else {
              ToastAndroid.show(`This email doesn't exist`, ToastAndroid.LONG);
              errors.email = true;
              setErrors({...errors})
            }
    
            setLoad(false)
        }else {
            ToastAndroid.show(`Email is invalid, please retry`, ToastAndroid.LONG);
            setLoad(false)
        }
    } catch(e){
        //ToastAndroid.show(e.response.data.error_message, ToastAndroid.LONG);
          navigation.navigate("ErrorMessage", {
            message: "Error occurred while sending an email!"
        });
        console.log(e);
        setLoad(false)
    }
};

  const sendMail = async (value) => {
    console.log("send mail");
    console.log(value);
    setLoad(true);
    ToastAndroid.show(`Mail sent`, ToastAndroid.LONG);
    // Send Mail
    let rep = await api.post('/reset', {
      id: value._id,
      name: value.name,
      email: value.email,
      subject: "Micity - Reset your password",
      date: new Date(Date.now()).toISOString().split('T')[0],
    });
    console.log(rep.data);
    navigation.navigate("Reset");
    setLoad(false)
    return rep;
  }

    return <KeyboardAwareScrollView>

        <Block flex={1}  color="white" animated>
            <Block style={{ paddingTop: Layout.base*1.9, paddingRight: Layout.base*1.5, paddingLeft: Layout.base*1.5, flexDirection: 'row', justifyContent: 'space-between'  }}>
                <TouchableOpacity >
                    <Icon.Ionicons
                        color={Colors.primary}
                        size={Layout.base*2}
                        name={"arrow-back"}
                        onPress={()=> navigation.goBack()}
                    />
                </TouchableOpacity>
              
                <Block padding={1}>
                    <Text numberOfLines={1} bold h1 primary></Text>
                </Block>
                <Block >
                </Block>
            </Block>
            <Block flex={1}>
                <View style={styles.container}>
                    <Image style={styles.icon} source={{uri: "https://img.icons8.com/color/70/000000/forget.png"}} />
                    <Text style={styles.title}>Forgot your password?</Text>
                    <Text style={styles.description}>
                    Enter your registered email below to receive password reset instructions.</Text>
                </View>
                <Block style={{padding: 50}} >
                    <Block style={styles.mt} >
                      <Input
                      placeholder="Email"
                      error={errors.email}
                      defaultValue={email}
                      onChangeText={text => setEmail(text)}
                  />
                        <Button onPress={() => checkEmail()}>
                            <Text white bold h2 center>Send</Text>
                        </Button>
                        {
                        load?
                        <ActivityIndicator size="large" color={Colors.danger} />: <></>
                    }
                    </Block>
                </Block>

            </Block>
        </Block>
</KeyboardAwareScrollView>

    
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop:50,
  },
  icon:{
    width:120,
    height:120,
  },
  title:{
    fontSize:24,
    textAlign: 'center',
    marginTop:22,
    color: "#a11"
  },
  description: {
    marginTop:20,
    textAlign: 'center',
    color: "#A9A9A9",
    fontSize:16,
    margin:40,
  },
  buttonContainer: {
    height:45,
    textAlign: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
});

export default Forget;
