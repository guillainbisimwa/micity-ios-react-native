import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import AsyncStorage from "@react-native-async-storage/async-storage";

import * as Icon from "@expo/vector-icons";
import { Colors, Layout } from '../constants';


const CustomDrawer = (props) => {
    const [user, setUser] = useState("");

    const getData = async () => {
    try {
        const value = await AsyncStorage.getItem('@user');
        if(value !== null ) {
            // value previously stored
            setUser(JSON.parse(value).name)
        }
    } catch(e) {
        // error reading value
        console.log('error', e);
    }  
    }

    useEffect(()=> {
        (async () => {
            await getData()
        })();
    },[])

    const clearAll = async () => {
        try {
            await AsyncStorage.clear();
            props.navigation.closeDrawer();
            props.navigation.navigate('Login');
          
        } catch(e) {
          // clear error
          console.log(e)
        }
        console.log('Done.')
    }

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: "#015a94"}}>
        <ImageBackground
          source={require('../assets/images/menu-bg.jpeg')}
          style={{padding: 20}}>
          <Image
            source={require('../assets/images/logo2.png')}
            style={{height: 80, width: 80, borderRadius: 40, marginBottom: 10}}
          />
          <Text numberOfLines={1} 
            style={{
              color: '#fff',
              fontSize: 16,
              fontWeight: "bold",
              marginBottom: 5,
            }}>
            {user}
          </Text>
          
        </ImageBackground>
        <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'}}>
        <TouchableOpacity onPress={() => clearAll()} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon.Ionicons
                color={Colors.danger}
                size={Layout.base*2}
                name={"log-out"}
            />
            <Text
              style={{
                fontSize: 15,
                marginLeft: 5,
              }}>
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;