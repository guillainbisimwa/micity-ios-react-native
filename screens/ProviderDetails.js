import React, { useState } from "react";
import { Block, Text } from "../components";
import { Colors, Layout, mocks } from "../constants";
import * as Icon from "@expo/vector-icons";
import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, TouchableOpacity } from "react-native";

const ProviderDetails = ({route, navigation}) => {
    const { details } = route.params;

    const [ active, setActive ] = useState('About');
    const [ about, setAbout ] = useState(true);
    const [ services, setServices ] = useState(false);
    const [ contact, setContact ] = useState(false);

    const renderTab = (value, id) => {
       
        const isActive = active === value;

        return(
            <TouchableOpacity key={id} style={styles.tab}
                onPress={() => handleTab(value)}
            >
                <Block center>
                    <Text style={[styles.current, isActive? styles.currentIsActive: null]}>{value}</Text>
                    <Block style={isActive? styles.active : null}></Block>
                </Block>
            </TouchableOpacity>
        )
    };

    const aboutComponent = () => {
        return <Block>
            <Text>{details.desc}</Text>
            <Text></Text>
            <Text h1 bold>Opening hours</Text>
            <Block>
                <Block row >
                    <Text bold>Week days: </Text>
                    <Text> {details.week}</Text>
                </Block>

                <Block row >
                    <Text bold>Weekend: </Text>
                    <Text>{details.weekend}</Text>
                </Block>

                <Block row >
                    <Text bold>Public days: </Text>
                    <Text>{details.public}</Text>
                </Block>
                
              
            </Block>
        </Block>
    };

    const contactComponent = () => {
        return <Block center>
            <Text bold h1 >{details.city}</Text>
            <Text >{details.address}</Text>
            <Text >{details.province}</Text>
            <Text></Text>
            <Text bold >{details.phone}</Text>
            <Text >{details.email}</Text>
            <Text >{details.website}</Text>
        </Block>
    };

    const serviceComponent = () => {
        return <Block>
            {
                details.services.split(",").map((val, k) => 
                <Block row key={k} margin={5}>
                    <Icon.Ionicons
                        color={Colors.black}
                        size={Layout.base}
                        name={"egg"}
                    />
                    <Text transform="capitalize" >{val}</Text>
                </Block>
                )
            }
        </Block>
    };

    const handleTab = (tab) => {
        setActive(tab);
        if(tab == "About"){
            setAbout(true);
            setServices(false);
            setContact(false);
        } else if(tab == "Services"){
            setAbout(false);
            setServices(true);
            setContact(false);
        } else {
            setAbout(false);
            setServices(false);
            setContact(true);
        }
    };

    return <Block flex={1} animated>
            <StatusBar style="dark" />
            <Block style={{ paddingTop: Layout.base*1.9, paddingRight: Layout.base*1.5, paddingLeft: Layout.base*1.5, flexDirection: 'row', justifyContent: 'space-between'  }}>
                <TouchableOpacity
                      onPress={()=> (navigation.goBack())}
                >
                    <Icon.Ionicons
                        color={Colors.primary}
                        size={Layout.base*2}
                        name={"arrow-back"}
                    />
                </TouchableOpacity>
              
                <Block>
                    <Image source={mocks.services[0].logo} style={styles.circle} />
                </Block>
                <Block>
                </Block>
            </Block>
            <Block flex={1} animated padding={Layout.base*2} >
                <Block center padding={Layout.base}>
                    <Text bold h2 primary>{details.name}</Text>
                </Block>
                <Text numberOfLines={2} darkGrey center>{details.desc}</Text>
                <Block style={{paddingVertical: 10}} >
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {
                        details.images.map((img, key) =>  <Block key={key} style={styles.container}><Image style={styles.img} source={{ uri: img}}  /></Block>)
                            
                    }
                    </ScrollView>
                </Block>
                <Block row middle >
                {
                    ['About', 'Services', 'Contact'].map((item, index)=> {
                        return renderTab(item, index);
                    })
                }
                </Block>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Block center>
                    {
                            about? aboutComponent(): contact? contactComponent(): serviceComponent()
                    }
                    </Block>
                </ScrollView>
                
            </Block>
        </Block>
};

const styles = StyleSheet.create({
  
    header: {
        color: Colors.light.tabIconDefault,
        textAlign: 'center',
    },
    circle: {
        width: Layout.base * 3,
        height: Layout.base * 3,
        borderRadius:  Layout.base * 2,
        borderWidth: 1,
        borderColor: Colors.danger,
        marginRight: 15
    },
    container: {
        borderRadius: Layout.base,
        width: (Layout.window.width/4),
        marginRight: 15,
    },
    img: {
        borderRadius:  Layout.base/2,
        marginBottom:  Layout.base,
        width: '100%',
        height: Layout.window.height / 8
    },
    active: {
        borderBottomColor: Colors.primary,
        borderBottomWidth: 5,
        width: 30,
        paddingBottom: 5,
    },
    current:{
        color: "black",
        fontSize: Layout.font,
        fontWeight: 'bold'
    },
    tab: {
        marginRight: 20,
        paddingBottom: 20,
    },
    currentIsActive:{
        color: Colors.primary
    },
});

export default ProviderDetails;
