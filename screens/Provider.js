import React, { useState, useEffect } from "react";
import { Block, Input, Service, Text } from "../components";
import { Colors, Layout, mocks } from "../constants";
import * as Icon from "@expo/vector-icons";
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { getProviders } from '../redux/providersSlice';
import useFetch from "./useFetch";

const Provider = ({route, navigation}) => {
    const { label, cat, province, listCat } = route.params;
    
    const [search, setSearch] = useState("");
    const [service, setService] = useState([]);
    const [load, setLoad] = useState(false);

    const {providers, loading} = useSelector( (state) => state.providers);
    const [ providerList, setProviderList ] = useState([]);
    const dispatch = useDispatch();

    const [response, loadingg, hasError] = useFetch(`https://micity-backend.herokuapp.com/services/${cat}`, {
        headers: {
            'content-type': 'application/json'
        },
        method: 'GET'},province 
    );

    useEffect(()=> {

    },[]);

    const onSearch = (keyWord) => {
        setSearch(keyWord);
        setProviderList([...providers.filter((service)=>(
            service.name.toLocaleLowerCase().includes(keyWord.trim().toLocaleLowerCase())))]);
    };

    return <Block flex={1} animated>
            <StatusBar style="dark" />
            <Block style={{ paddingTop: Layout.base*1.9, paddingRight: Layout.base*1.5, paddingLeft: Layout.base*1.5, flexDirection: 'row', justifyContent: 'space-between'  }}>
                <TouchableOpacity
                      onPress={()=> (navigation.navigate('Providers',  { province: province, listCat: listCat}))}
                >
                    <Icon.Ionicons
                        color={Colors.primary}
                        size={Layout.base*2}
                        name={"arrow-back"}
                    />
                </TouchableOpacity>
              
                <Block padding={1}>
                    <Text numberOfLines={1} bold h1 primary>{label}</Text>
                </Block>
                <Block>
                </Block>
            </Block>
            <Block flex={1} animated style={{paddingBottom:1, paddingLeft:Layout.base*2, paddingRight:Layout.base*2, flex: 1}}>
                <Text h2 style={styles.header} >Look for service providers that are in your city!</Text>
                <Input
                    search
                    placeholder="Search"
                    style={styles.input}
                    defaultValue={search}
                    onChangeText={text => onSearch(text)}
                />
                <Text h2 style={styles.header} >{province}</Text>

                <Block flex={1} animated center>
                    {
                        (response.length == 0 && !loadingg) ?
                        <Text h3 bold center accent>Nothing found.</Text> : <Text></Text>
                    }
                    {
                        loadingg?
                        <ActivityIndicator size="large" color={Colors.danger} />: 
                        <ScrollView showsVerticalScrollIndicator={false} >
                        {           
                            //filter((obj,id) => obj.province === province)                 
                            response.filter((obj,id) => obj.province === province).map((object, key) => {
                                if(object.status === 1)
                                {
                                    return <Service  label={label} cat={cat} key={key} services={object}  province= {province} listCat={listCat} navigation={navigation} />

                                }
                            } )
                        }
                    </ScrollView>
                    }
                    
                </Block>
            </Block>
        </Block>
    
};

const styles = StyleSheet.create({
    header: {
        color: Colors.light.tabIconDefault,
        textAlign: 'center',
    },
    input: {
        borderWidth: 0,
        backgroundColor: Colors.dark.tabIconDefault,
        marginBottom: Layout.base
      },
    hasErrors: {
        borderBottomColor: Colors.danger
    }
});


export default Provider;
