import React, { useEffect, useState } from "react";
import { Block, Button, Checkbox, Input, Select, Text } from "../components";
import { Image, View, StyleSheet, Keyboard,Modal, ScrollView, ToastAndroid, ActivityIndicator } from "react-native";
import { Colors, Layout, mocks } from "../constants";
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from "../api/api";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { TouchableOpacity } from "react-native-gesture-handler";

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
    const [showTerms, setShowTerms] = useState(false);

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

    const renderTermsService = () => {
        return (
          <Modal
          animationType="slide"
          visible={showTerms}
          onRequestClose={() => {
            setShowTerms(!showTerms);
          }}>
          
            <Block  style={{flex:1}}>
            <Block padding={Layout.padding}  style={{flex:1}}>
              <Text h2 bold >
                Privacy Policy
              </Text>
    
              <ScrollView style={{ marginVertical: Layout.padding }}>
                <Text
                  caption
                  gray
                 // height={24}
                  style={{ marginBottom: Layout.base }}
                >
                  1. Your use of the Service is at your sole risk. The service is
                  provided on an "as is" and "as available" basis.
                </Text>
                <Text
                  caption
                  gray
                 // height={24}
                  style={{ marginBottom:  Layout.base  }}
                >
                  2. Support for Expo services is only available in English, via
                  e-mail.
                </Text>
                <Text
                  caption
                  gray
                 // height={24}
                  style={{ marginBottom:  Layout.base  }}
                >
                  3. You understand that Expo uses third-party vendors and hosting
                  partners to provide the necessary hardware, software, networking,
                  storage, and related technology required to run the Service.
                </Text>
                <Text
                  caption
                  gray
                 // height={24}
                  style={{ marginBottom:  Layout.base  }}
                >
                  4. You must not modify, adapt or hack the Service or modify
                  another website so as to falsely imply that it is associated with
                  the Service, Expo, or any other Expo service.
                </Text>
                <Text
                  caption
                  gray
                 // height={24}
                  style={{ marginBottom:  Layout.base  }}
                >
                  5. You may use the Expo Pages static hosting service solely as
                  permitted and intended to host your organization pages, personal
                  pages, or project pages, and for no other purpose. You may not use
                  Expo Pages in violation of Expo's trademark or other rights or in
                  violation of applicable law. Expo reserves the right at all times
                  to reclaim any Expo subdomain without liability to you.
                </Text>
                <Text
                  caption
                  gray
                 // height={24}
                  style={{ marginBottom:  Layout.base  }}
                >
                  6. You agree not to reproduce, duplicate, copy, sell, resell or
                  exploit any portion of the Service, use of the Service, or access
                  to the Service without the express written permission by Expo.
                </Text>
                <Text
                  caption
                  gray
                 // height={24}
                  style={{ marginBottom:  Layout.base  }}
                >
                  7. We may, but have no obligation to, remove Content and Accounts
                  containing Content that we determine in our sole discretion are
                  unlawful, offensive, threatening, libelous, defamatory,
                  pornographic, obscene or otherwise objectionable or violates any
                  party's intellectual property or these Terms of Service.
                </Text>
                <Text
                  caption
                  gray
                 // height={24}
                  style={{ marginBottom:  Layout.base  }}
                >
                  8. Verbal, physical, written or other abuse (including threats of
                  abuse or retribution) of any Expo customer, employee, member, or
                  officer will result in immediate account termination.
                </Text>
                <Text
                  caption
                  gray
                 // height={24}
                  style={{ marginBottom:  Layout.base  }}
                >
                  9. You understand that the technical processing and transmission
                  of the Service, including your Content, may be transferred
                  unencrypted and involve (a) transmissions over various networks;
                  and (b) changes to conform and adapt to technical requirements of
                  connecting networks or devices.
                </Text>
                <Text
                  caption
                  gray
                 // height={24}
                  style={{ marginBottom:  Layout.base  }}
                >
                  10. You must not upload, post, host, or transmit unsolicited
                  e-mail, SMSs, or "spam" messages.
                </Text>
                
              </ScrollView>
             
             
              <Block >
                <Button onPress={() => setShowTerms(!showTerms)}>
                  <Text center caption white>
                  I understand
                  </Text>
                </Button>
              </Block>
    
            </Block>
            
            </Block>
          </Modal>
        );
      }


    return <KeyboardAwareScrollView>
            <Block padding={50} color="white" animated>
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
                    <Button onPress={() => setShowTerms(!showTerms)}>
            <Text center caption white>
              Conditions d'utilisations
            </Text>
          </Button>
                      
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
        {renderTermsService()}
    </KeyboardAwareScrollView>
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
