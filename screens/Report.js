import React, { useCallback, useEffect, useState } from "react";
import { Block, Button, Input, Text, Select } from "../components";
import { Image, StyleSheet, KeyboardAvoidingView, ScrollView, ToastAndroid, ActivityIndicator, Alert } from "react-native";
import { Colors, Layout } from "../constants";
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from "../api/api";
import Constants from "expo-constants";
import * as Icon from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch, useSelector } from 'react-redux';
import { getMunicipalities } from "../redux/municipalitiesSlice";
import * as ImagePicker from 'expo-image-picker';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Report = ({route, navigation}) => {
    const { min } = route.params;

    const [location, setLocation] = useState("");
    const [desc, setDesc] = useState("");
    const [municipality, setMunicipality] = useState("");
    const [load, setLoad] = useState(false);
    const [loadPic, setLoadPic] = useState(false);
    const [imgUrl, setImgUrl] = useState([]);
   
    const [errors, setErrors] = useState({
        location :false,
        desc :false,
        municipality: false,
        images: []
    });

    const [images, setImages] = useState([]);

    const {municipalities, loading} = useSelector( (state) => state.municipalities);
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getMunicipalities());
        console.log(min);
        
        console.log("-------------------------------");
        console.log(municipalities);
        (async () => {
            if (Constants.platform.ios) {
              const cameraRollStatus =
                await ImagePicker.requestMediaLibraryPermissionsAsync();
              const cameraStatus = await ImagePicker.requestCameraPermissionsAsync();
              if (
                cameraRollStatus.status !== "granted" ||
                cameraStatus.status !== "granted"
              ) {
                alert("Sorry, we need these permissions to make this work!");
              }
            }
          })();
    },[])

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: 'Images',
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
          base64: true
        });
    
        if (!result.cancelled) {
            const uri = result.uri;
            const type = result.type;
            const name = `${Math.floor(Math.random() * 900) + 100}_${Date.now()}`;
            let base64Img = `data:image/jpg;base64,${result.base64}`;

            const source = {
              uri,
              type,
              name,
              base64Img
            }

         
            //await onCloudinarySaveCb(source);
            console.log("------------");
            let imgCb = await onCloudinarySaveCb(source);
            let imgCb2 = [...images];

            imgCb2.push(imgCb);
            setImages([...imgCb2]);
            console.log(images);
        }
      };

      const takePhoto = async () => {
        let result = await ImagePicker.launchCameraAsync({
          mediaTypes: "Images",
          aspect: [4, 3],
          base64: true
    //       ImagePicker.MediaTypeOptions.Images,
    //   allowsEditing: true,
    //     aspect: [4, 3],
    //   quality: 1,
    //   base64: true,
        });
    
        console.log("result");
        console.log(result);
    
        // if (!result.cancelled) {
        //     var imgs = [...images.push(result.uri)];
        //     setImages(imgs)
        //     console.log(images);
        // }

        if (!result.cancelled) {
            const uri = result.uri;
            const type = result.type;
            const name = `${Math.floor(Math.random() * 900) + 100}_${Date.now()}`;
            let base64Img = `data:image/jpg;base64,${result.base64}`;

            const source = {
              uri,
              type,
              name,
              base64Img
            }

         
            //await onCloudinarySaveCb(source);
            console.log("------------");
            let imgCb = await onCloudinarySaveCb(source);
            let imgCb2 = [...images];

            imgCb2.push(imgCb);
            setImages([...imgCb2]);
            console.log(images);
        }
      };

      const removePic = (id) => {
        var removed = images.filter((value)=> value !== id);;
        setImages(removed)
      }

      const info = () => (
        Alert.alert(
          `Warning`,
          `You can't upload more than 3 pictures!!`,
          [
            {
              text: "Okay",
              style: "cancel"
            }
          ]
        )
      );

      const onCloudinarySaveCb = async (obj) => {
        setLoadPic(true)
        var pic = "";
            let apiUrl =
              'https://api.cloudinary.com/v1_1/micity/image/upload';
            let data = {
              file: obj.base64Img,
              upload_preset: 'ml_default'
            };
    
            await fetch(apiUrl, {
              body: JSON.stringify(data),
              headers: {
                'content-type': 'application/json'
              },
              method: 'POST'
            })
              .then(async response => {
                let data = await response.json();
                //console.log(data);
                if (await data.secure_url) {
                    //console.log('Upload successful');
                    setLoadPic(false);
                    pic = await data.secure_url;
                    //console.log(pic);
                    //setImgUrl(pic);
                   
                }
              })
              .catch(err => {
                console.log('Cannot upload');
                setLoadPic(false);
                console.log(err);
              });
          return pic;
    };
    
    const onSave = async () => {
        console.log(images);
        setLoad(true);
        errors.location = false;
        errors.desc = false;
        errors.municipality = false;
        setErrors({...errors})

        if(location.trim().length <= 3){
            errors.location = true;
            setErrors({...errors})
        }

        if(desc.trim().length <= 3){
            errors.desc = true;
            setErrors({...errors})
        }

        if(municipality === ""){
            errors.municipality = true;
            setErrors({...errors})
        }

        try{
            const value = await AsyncStorage.getItem('@user');
            if( !errors.location &&
                !errors.desc &&
                !errors.municipality){   

                const rep = await api.post('/report', {
                    location: location,
                    desc: desc,
                    owner: JSON.parse(value)._id,
                    municipality: municipality,
                    type: "0",
                    status: "0",
                    images: images
                });
               
                setErrors({
                    location :false,
                    desc :false,
                    municipality: false,
                    images: []
                });
            
                setImages([]);
                console.log(rep.data);
                if(rep.data.hasOwnProperty('owner')){
                    await onSendMail1(value);
                    await onSendMail2(value);
                    setLocation("");
                    setDesc("");
                    setMunicipality("");
                    setImgUrl([]);
                    navigation.navigate("Message", {
                        message: "You have successfully reported a problem!"
                    });
                }
            }else {
                ToastAndroid.show(`One or more fields is not invalid, please retry`, ToastAndroid.LONG);
                setLoad(false)
            }
        } catch(e){
            console.log(e);
            ToastAndroid.show(e.response.data.error_message, ToastAndroid.LONG);
            setLoad(false)
            navigation.navigate("ErrorMessage", {
                message: "Error occurred while reporting a problem!"
            });
        }
    }

    const onSendMail1 = async (value) => {
        ToastAndroid.show(`Mail sent`, ToastAndroid.LONG);
        // Send Mail
        let rep = await api.post('/reportMail', {
            email: "micityoffice@gmail.com",
            subject: "Micity - Problem reported",
            date: new Date(Date.now()).toISOString().split('T')[0],
            municipality: municipality,
            name: JSON.parse(value).name,
            mail: JSON.parse(value).email,
            Location: location,
            details: desc,
            source1: images[0] === undefined? "" : images[0],
            source2: images[1] === undefined? "" : images[1],
            source3: images[2] === undefined? "" : images[2],
        });
        console.log(rep.data);
        setLoad(false)
        return rep;
    }

    const onSendMail2 = async (value) => {
        ToastAndroid.show(`Mail2 sent`, ToastAndroid.LONG);
        // Send Mail
        setLoad(true)
       
        let rep = await api.post('/reportMail', {
            email: "guillain.hpnk@outlook.com",
            subject: "Micity - Problem reported",
            date: new Date(Date.now()).toISOString().split('T')[0],
            municipality: municipality,
            name: JSON.parse(value).name,
            mail: JSON.parse(value).email,
            Location: location,
            details: desc,
            source1: images[0] === undefined? "" : images[0],
            source2: images[1] === undefined? "" : images[1],
            source3: images[2] === undefined? "" : images[2],
        });
        setLoad(false);
        console.log(rep.data);
        return rep;
    }

    return <KeyboardAwareScrollView style={styles.scroll}>
            <Block color="white" animated>
                <Block flex={1} >
                    <Block style={{ paddingTop: Layout.base*1.9, paddingRight: Layout.base*1.5, paddingLeft: Layout.base*1.5, flexDirection: 'row', justifyContent: 'space-between'  }}>
                        <TouchableOpacity
                            onPress={()=> (navigation.goBack() )}
                        >
                            <Icon.Ionicons
                                color={Colors.primary}
                                size={Layout.base*2}
                                name={"arrow-back"}
                            />
                        </TouchableOpacity>
                    
                        <Block padding={1}>
                            <Text numberOfLines={1} bold h1 primary>Report a problem</Text>
                        </Block>
                        <Block>
                        </Block>
                    </Block>
                </Block>
                <Block  flex={2} animated style={{paddingBottom:1, paddingLeft:Layout.base*2, paddingRight:Layout.base*2, flex: 1}}>
                    <Text h2 style={styles.header} >Report an issue in your area by uploading a photo.</Text>
                    
                    <Block  flex={1}>
                        <Block row space="between">
                            <TouchableOpacity style={styles.btn}
                                
                                onPress={() => images.length >= 3? info() : pickImage()}>
                                <Icon.Ionicons
                                    color={Colors.primary}
                                    size={Layout.base*1.7}
                                    name={"image-outline"}
                                    style={styles.icon} 
                                />
                                 {loadPic?
                                <ActivityIndicator size="small" color={Colors.danger} />: <></>}
                                <Text>Upload</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.btn} 
                            onPress={() => images.length >= 3? info() : takePhoto()}>
                                <Icon.Ionicons
                                    color={Colors.primary}
                                    size={Layout.base*1.7}
                                    name={"camera-outline"}
                                    style={styles.icon}
                                />
                                  {loadPic?
                                <ActivityIndicator size="small" color={Colors.danger} />: <></>}
                            <Text>Take a photo</Text>
                            </TouchableOpacity>

                        </Block>
                        <Block  style={styles.imgContainer}>
                            {
                                images.map((img, key) => <Block key={key}>
                                <Icon.Ionicons
                                    color={Colors.danger}
                                    size={Layout.base*2}
                                    name={"close-circle"}
                                    style={styles.cancel}
                                    onPress={() => removePic(img)}
                                />
                                        <Block style={styles.bg}>
                                        <Image  source={{ uri: img }} style={styles.img} />
                                        </Block>
                                    </Block>
                                )
                            }
                        </Block>
                      
                        <Input
                            icon="location-outline"
                            search
                            placeholder="Location"
                            error={errors.location}
                            defaultValue={location}
                            onChangeText={text => setLocation(text)}
                        />

                        <Select
                            placeholder="Select a Municipality"
                            items={min}
                            value={municipality}
                            categorySelectable={false}
                            error={errors.municipality}
                            setValue={setMunicipality}
                            listParentLabelStyle={{
                                fontWeight: "bold"
                            }}
                        />

                        <Input
                            multiline={true}
                            numberOfLines={10}
                            placeholder="Add a description"
                            style={styles.textArea}
                            error={errors.desc}
                            defaultValue={desc}
                            onChangeText={text => setDesc(text)}
                        />

                        <Block style={styles.mt} >
                            <Button  onPress={() => onSave()}>
                                <Text white bold h2 center>Report</Text>
                            </Button>
                        </Block>
                        {
                            load?
                            <ActivityIndicator size="large" color={Colors.danger} />: <></>
                        }
                        <Block style={styles.mb}></Block>
                    
                    </Block>
                </Block>
            </Block>
        </KeyboardAwareScrollView>
};


const styles = StyleSheet.create({
    scroll:{
        backgroundColor: Colors.dark.text
    },

    report: {
        flex: 1,
        backgroundColor: Colors.danger,
        justifyContent: "center",
    },
    header: {
        color: Colors.light.tabIconDefault,
        textAlign: 'center',
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
    mb: {
        marginTop: 50
    },
    btn: {
        backgroundColor: Colors.light.tint,
        padding: Layout.base/2,
        width: Layout.window.width/2.5,
        borderRadius: Layout.radius,
        elevation: 2,
        marginTop: Layout.base*1.8,
        flexDirection: 'row',
        alignItems:"center",
    },
    icon:{
        marginHorizontal: 5
    },
    textArea: {
        height: 100,
        paddingTop:15,
        justifyContent: "flex-start",
        textAlignVertical: 'top'
    },
    cancel: {
        position: "absolute",
        zIndex: 100,
        padding: 10,
        right:Layout.base,
        elevation: 2
    },
    imgContainer: {
        marginVertical: Layout.base,
        flexDirection: "row",
        justifyContent: "flex-start",
    },
    img: {
        width: Layout.window.width/4, 
        height:  Layout.window.width/4,
        borderRadius: Layout.radius,
        opacity: 0.7,
    },
    bg: {
        backgroundColor: "#000",
        borderRadius: Layout.radius,
        marginRight: Layout.base*1.7
    }
});

export default Report;
