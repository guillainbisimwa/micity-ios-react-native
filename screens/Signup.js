import React, { useEffect, useState } from "react";
import { Block, Button, Input, Select, Text } from "../components";
import Checkbox from 'expo-checkbox';
import { Image, StyleSheet, Keyboard,Modal, ScrollView, ToastAndroid, ActivityIndicator } from "react-native";
import { Colors, Layout, mocks } from "../constants";
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from "../api/api";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

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
    const [isSelected, setSelection] = useState(false);


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
                  style={{ marginBottom: Layout.base/2, fontWeight: "bold" }}
                >
                1. Interpretation and Definitions.
                </Text>

                <Text
                  style={{ marginBottom: Layout.base/2, fontWeight: "bold" }}
                >
                1.1. Interpretation
                </Text>
                <Text
                  caption
                  gray
                  style={{ marginBottom:  Layout.base  }}
                >
                The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                </Text>
                <Text
                  style={{ marginBottom: Layout.base/2, fontWeight: "bold" }}
                >
                1.2. Definitions
                </Text>
                <Text
                  caption
                  gray
                  style={{ marginBottom:  Layout.base/2  }}
                >
                  For the purposes of this Privacy Policy:
                </Text>
                <Block paddingLeft={10} marginTop={5}>
                  <Text
                    caption
                    gray
                    style={{  }}
                  >
                    <Text bold>* Account</Text> means a unique account created for You to access our Service or parts of our Service.
                  </Text>
                </Block>

                <Block paddingLeft={10} marginTop={5}>
                  <Text
                    caption
                    gray
                    style={{  }}
                  >
                    <Text bold>* Affiliate</Text> means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.
                  </Text>
                </Block>

                <Block paddingLeft={10} marginTop={5}>
                  <Text
                    caption
                    gray
                    style={{  }}
                  >
                    <Text bold>* Application</Text> means the software program provided by the Company downloaded by You on any electronic device, named MiCity
                  </Text>
                </Block>

                <Block paddingLeft={10} marginTop={5}>
                  <Text
                    caption
                    gray
                    style={{  }}
                  >
                    <Text bold>* Company</Text> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to MiCity.
                  </Text>
                </Block>

                <Block paddingLeft={10} marginTop={5}>
                  <Text
                    caption
                    gray
                    style={{  }}
                  >
                    <Text bold>* Country</Text> refers to: South Africa
                  </Text>
                </Block>

                <Block paddingLeft={10} marginTop={5}>
                  <Text
                    caption
                    gray
                    style={{  }}
                  >
                    <Text bold>* Device</Text>   means any device that can access the Service such as a computer, a cellphone or a digital tablet.
                  </Text>
                </Block>

                <Block paddingLeft={10} marginTop={5}>
                  <Text
                    caption
                    gray
                    style={{  }}
                  >
                    <Text bold>* Personal</Text> Data is any information that relates to an identified or identifiable individual.
                  </Text>
                </Block>

                <Block paddingLeft={10} marginTop={5}>
                  <Text
                    caption
                    gray
                    style={{  }}
                  >
                    <Text bold>* Service</Text>  refers to the Application.
                  </Text>
                </Block>

                <Block paddingLeft={10} marginTop={5}>
                  <Text
                    caption
                    gray
                    style={{  }}
                  >
                    <Text bold>* Service Provider</Text>  means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.
                  </Text>
                </Block>

                <Block paddingLeft={10} marginTop={5}>
                  <Text
                    caption
                    gray
                    style={{  }}
                  >
                    <Text bold>* Usage Data</Text>  refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).
                  </Text>
                </Block>

                <Block paddingLeft={10} marginTop={5}>
                  <Text
                    caption
                    gray
                    style={{  }}
                  >
                    <Text bold>* You</Text>  means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.
                  </Text>
                </Block>


                <Text
                  caption
                  gray
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
                  style={{ marginBottom:  Layout.base  }}
                >
                  6. You agree not to reproduce, duplicate, copy, sell, resell or
                  exploit any portion of the Service, use of the Service, or access
                  to the Service without the express written permission by Expo.
                </Text>
                <Text
                  caption
                  gray
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
                  style={{ marginBottom:  Layout.base  }}
                >
                  8. Verbal, physical, written or other abuse (including threats of
                  abuse or retribution) of any Expo customer, employee, member, or
                  officer will result in immediate account termination.
                </Text>
                <Text
                  caption
                  gray
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
                  style={{ marginBottom:  Layout.base  }}
                >
                  10. You must not upload, post, host, or transmit unsolicited
                  e-mail, SMSs, or "spam" messages.
                </Text>
                
              </ScrollView>
             
             
              <Block >
                <Button onPress={() => setShowTerms(!showTerms)}>
                  <Text center caption white>
                  I agree
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
                    <Block row>
                    <Checkbox
                        value={isSelected}
                        onValueChange={() => {
                          setSelection(!isSelected)
                         
                          if(!isSelected){
                            setShowTerms(!showTerms)
                          }
                          }}
                        />
                      <Text> I accept the conditions of use.</Text>
                    </Block>
                    
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
