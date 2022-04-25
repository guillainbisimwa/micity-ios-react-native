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
                    <Text bold>* Personal Data</Text> is any information that relates to an identified or identifiable individual.
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
                    style={{ marginBottom: Layout.base  }}
                  >
                    <Text bold>* You</Text>  means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.
                  </Text>
                </Block>

                <Text
                  style={{ marginBottom: Layout.base/2, fontWeight: "bold" }}
                >
                2. Collecting and Using Your Personal Data.
                </Text>

                <Text
                  style={{ marginBottom: Layout.base/2, fontWeight: "bold" }}
                >
                2.1. Types of Data Collected
                </Text>

                <Text
                  style={{ marginBottom: Layout.base/2, fontWeight: "bold" }}
                >
                  Personal Data
                </Text>
                <Text
                  caption
                  gray
                  style={{ marginBottom:  Layout.base  }}
                >
                While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
                </Text>
                
                <Block paddingLeft={10} marginTop={5}>
                  <Text
                    caption
                    gray
                    style={{  }}
                  >
                    <Text bold>* Email address</Text>
                  </Text>
                </Block>
                <Block paddingLeft={10} marginTop={5}>
                  <Text
                    caption
                    gray
                    style={{  }}
                  >
                    <Text bold>* First name and last name</Text>
                  </Text>
                </Block>

                <Block paddingLeft={10} marginTop={5}>
                  <Text
                    caption
                    gray
                    style={{  }}
                  >
                    <Text bold>* Phone number</Text>
                  </Text>
                </Block>

                <Block paddingLeft={10} marginTop={5}>
                  <Text
                    caption
                    gray
                    style={{  }}
                  >
                    <Text bold>* Address, State, Province, ZIP/Postal code, City</Text>
                  </Text>
                </Block>

                <Block paddingLeft={10} marginTop={5} marginBottom={5}>
                  <Text
                    caption
                    gray
                    style={{  }}
                  >
                    <Text bold>* Usage Data</Text>
                  </Text>
                </Block>

                <Text
                  style={{ marginBottom: Layout.base/2, fontWeight: "bold" }}
                >
                 Usage Data
                </Text>

                 <Text
                  caption
                  gray
                  style={{ marginBottom:  Layout.base/2 }}
                >
                  Usage Data is collected automatically when using the Service.</Text>
                  <Text
                  caption
                  gray
                  style={{ marginBottom:  Layout.base/2 }}
                >
                  Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
                </Text> 
                
                <Text
                  caption
                  gray
                  style={{ marginBottom:  Layout.base/2 }}
                >
                  When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.
                </Text> 
                <Text
                  caption
                  gray
                  style={{ marginBottom:  Layout.base }}
                >
                  We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.

                </Text> 

                <Text
                  style={{ marginBottom: Layout.base/2, fontWeight: "bold" }}
                >
                 Information Collected while Using the Application
                </Text>

                <Text
                  caption
                  gray
                  style={{ marginBottom:  Layout.base/2 }}
                >While using Our Application, in order to provide features of Our Application, We may collect, with Your prior permission:
                </Text>
                <Text
                  caption
                  gray
                  style={{ marginBottom:  Layout.base/2, fontWeight: "bold" }}
                > Pictures and other information from your Device's camera and photo library
                </Text>
                <Text
                  caption
                  gray
                  style={{ marginBottom:  Layout.base/2 }}
                >We use this information to provide features of Our Service, to improve and customize Our Service. The information may be uploaded to the Company's servers and/or a Service Provider's server or it may be simply stored on Your device.
                </Text>
                <Text
                  caption
                  gray
                  style={{ marginBottom:  Layout.base/2 }}
                >You can enable or disable access to this information at any time, through Your Device settings.
                </Text>

                <Text
                  style={{ marginBottom: Layout.base/2, fontWeight: "bold" }}
                >
                3. Use of Your Personal Data
                </Text>

              
                <Text
                  caption
                  gray
                  style={{ marginBottom:  Layout.base/2  }}
                >
                The Company may use Personal Data for the following purposes:
                </Text>
                
               
                <Block paddingLeft={10} marginTop={5}>
                  <Text
                    caption
                    gray
                    style={{  }}
                  >
                    <Text bold>* To provide and maintain our Service</Text> ,including to monitor the usage of our Service.
                  </Text>
                </Block>

                <Block paddingLeft={10} marginTop={5}>
                  <Text
                    caption
                    gray
                    style={{  }}
                  >
                    <Text bold>* To manage Your Account:</Text> to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.</Text>
                </Block>

                <Block paddingLeft={10} marginTop={5}>
                  <Text
                    caption
                    gray
                    style={{  }}
                  >
                    <Text bold>* For the performance of a contract:</Text> the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service. </Text>
                </Block>

                <Block paddingLeft={10} marginTop={5}>
                  <Text
                    caption
                    gray
                    style={{  }}
                  >
                    <Text bold>* To contact You:</Text>  To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.</Text>
                </Block>

                <Block paddingLeft={10} marginTop={5}>
                  <Text
                    caption
                    gray
                    style={{  }}
                  >
                    <Text bold>* To provide You</Text> with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.
              </Text>
                </Block>

                <Block paddingLeft={10} marginTop={5}>
                  <Text
                    caption
                    gray
                    style={{  }}
                  >
                    <Text bold>* To manage Your requests:</Text>  To attend and manage Your requests to Us.
            </Text>
                </Block>

                <Block paddingLeft={10} marginTop={5}>
                  <Text
                    caption
                    gray
                    style={{  }}
                  >
                    <Text bold>* For business transfers:</Text>  We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.</Text>
                </Block>

                <Block paddingLeft={10} marginTop={5}>
                  <Text
                    caption
                    gray
                    style={{  }}
                  >
                    <Text bold>* For other purposes:</Text>  We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.
                  </Text>
                </Block>

                <Text
                  caption
                  gray
                  style={{ marginBottom:  Layout.base  }}
                >
                We may share Your personal information in the following situations:
                </Text>

                <Block paddingLeft={10} marginTop={5}>
                  <Text
                    caption
                    gray
                    style={{  }}
                  >
                    <Text bold>* With Service Providers: :</Text>  We may share Your personal information with Service Providers to monitor and analyze the use of our Service, to contact You.
            </Text>
                </Block>

                <Block paddingLeft={10} marginTop={5}>
                  <Text
                    caption
                    gray
                    style={{  }}
                  >
                    <Text bold>* For business transfers:</Text>  We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.
            </Text>
                </Block>

                <Block paddingLeft={10} marginTop={5}>
                  <Text
                    caption
                    gray
                    style={{  }}
                  >
                    <Text bold>* With Affiliates:</Text>  We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.
              </Text>
                </Block>

                <Block paddingLeft={10} marginTop={5}>
                  <Text
                    caption
                    gray
                    style={{  }}
                  >
                    <Text bold>* With business partners:</Text>  We may share Your information with Our business partners to offer You certain products, services or promotions.
              </Text>
                </Block>

                <Block paddingLeft={10} marginTop={5}>
                  <Text
                    caption
                    gray
                    style={{  }}
                  >
                    <Text bold>* With other users:</Text> when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside.
            </Text>
                </Block>

                <Block paddingLeft={10} marginTop={5}>
                  <Text
                    caption
                    gray
                    style={{  }}
                  >
                    <Text bold>* With Your consent:</Text> We may disclose Your personal information for any other purpose with Your consent.
            </Text>
                </Block>

                <Text
                  style={{ marginBottom: Layout.base/2, fontWeight: "bold" }}
                >
                4. Retention of Your Personal Data
                </Text>

                <Text
                  caption
                  gray
                  style={{ marginBottom:  Layout.base/2 }}
                >
                 The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.
                </Text>

                <Text
                  caption
                  gray
                  style={{ marginBottom:  Layout.base/2 }}
                >
                The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.
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
