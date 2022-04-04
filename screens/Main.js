import React, { useEffect, useState } from "react";
import { Block, Menu, Select, Text } from "../components";
import { Colors, Layout, mocks } from "../constants";
import * as Icon from "@expo/vector-icons";
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { providers } from "../constants/mocks";
import AsyncStorage from '@react-native-async-storage/async-storage';
import useSaveCat from "../hooks/useSaveCat";
import useSaveMin from "../hooks/useSaveMin";
import useSaveServ from "../hooks/useSaveServ";


const Main = ({navigation}) => {
    const [province, setProvince] = useState("Western Cape");
    const [ categoriesList, setCategoriesList ] = useState(providers);

    const [responseCat, loadingCat, hasErrorCat] = useSaveCat(`https://micity-backend.herokuapp.com/categories/`);
    const [responseMin, loadingMin, hasErrorMin] = useSaveMin(`https://micity-backend.herokuapp.com/municipalities/`);
    const [responseServ, loadingServ, hasErrorServ] = useSaveServ(`https://micity-backend.herokuapp.com/services/`);

    useEffect(()=> {
        getData();
    },[]);

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('@cat');
            if(value !== null ) {
                // value previously stored
                console.log("-------------Cat-------------");
                console.log(value);
            }
        } catch(e) {
          // error reading value
          console.log('error', e);
        }  
    }


    return  <ScrollView showsVerticalScrollIndicator={false}>
    <Block flex={1} animated>
            <StatusBar style="dark" />
            <Block style={{ paddingTop: Layout.base*3, paddingRight: Layout.base*1.5, paddingLeft: Layout.base*1.5, flexDirection: 'row', justifyContent: 'space-between'  }}>
                <TouchableOpacity
                onPress={() => navigation.openDrawer()}>
                    <Icon.Ionicons
                        color={Colors.primary}
                        size={Layout.base*2}
                        name={"menu"}
                    />
                </TouchableOpacity>
              
                <Block padding={1}>
                    <Text numberOfLines={1} bold h1 primary>MiCity</Text>
                </Block>
                <Block>
                </Block>
            </Block>
            <Block style={{ paddingTop: Layout.base*1.3, paddingRight: Layout.base*2, paddingLeft: Layout.base*2, paddingBottom: Layout.base*2 }} >
                <Block style={styles.select}>
                    <Select
                        placeholder="Select your province"
                        items={mocks.provinces}
                        value={province}
                        setValue={setProvince}
                    />
                </Block>

                <Block row style={styles.wrap}>
                    {
                        mocks.Menu.map((value, key)=> 
                            <Menu
                                key={key}
                                name={value.name}
                                img={value.image}
                                province={province}
                                status={value.status}
                                navigation={navigation}
                                listCat= {categoriesList}
                                listMin= {responseMin}
                            />
                        )
                    } 
                </Block>
            </Block>
        </Block>
    </ScrollView>
};

const styles = StyleSheet.create({
    wrap :{
        flexDirection: 'row',
        flexWrap: "wrap",
        justifyContent: 'center',
        // zIndex: 0,
        // elevation: 0
    },
    select: {
        margin: Layout.base,
        // zIndex: 1,
        // elevation: 1
    }
});

export default Main;
