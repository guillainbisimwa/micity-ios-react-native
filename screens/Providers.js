import React, { useCallback, useEffect, useState } from "react";
import { Block, Input, Service, ServiceCategory, Text } from "../components";
import { Colors, Layout } from "../constants";
import * as Icon from "@expo/vector-icons";
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, RefreshControl, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../redux/categoriesSlice';
import { getAllProviders } from "../redux/allProvidersSlice";
import { providers } from "../constants/mocks";
import AsyncStorage from '@react-native-async-storage/async-storage';
import useSaveCat from "../hooks/useSaveCat";
import useSaveMin from "../hooks/useSaveMin";
import useSaveServ from "../hooks/useSaveServ";


const Providers = ({route, navigation}) => {
    const { province, listCat } = route.params;

    const [search, setSearch] = useState("");
    const [serviceProvider, setServiceProvider] = useState(false);
    const [refreshing, setRefreshing] = useState(false);

    const { allProviders, loadingAll } = useSelector( (state) => state.allProviders);
    const [ providerList, setProviderList ] = useState([]);
    const [ providerList2, setProviderList2 ] = useState([]);

    const {categories, loading} = useSelector( (state) => state.categories);
    const [ categoriesList, setCategoriesList ] = useState([]);
    const dispatch = useDispatch();

    const [responseCat, loadingCat, hasErrorCat] = useSaveCat(`https://micity-backend.herokuapp.com/categories/`);
    const [responseMin, loadingMin, hasErrorMin] = useSaveMin(`https://micity-backend.herokuapp.com/municipalities/`);
    const [responseServ, loadingServ, hasErrorServ] = useSaveServ(`https://micity-backend.herokuapp.com/services/`);


    useEffect(()=> {
        (async () => {
            setSearch('');
            setServiceProvider(false)

            //dispatch(getAllProviders());
            //setProviderList(await allProviders);
            getData()
        })();
    },[]);

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('@cat');
            if(value !== null ) {
                // value previously stored
                console.log("-------------Cat-------------");
                setCategoriesList(JSON.parse(value))
            }

            const valueServ = await AsyncStorage.getItem('@serv');
            if(valueServ !== null || valueServ !== undefined ) {
                // value previously stored
                console.log("-------------serv-------------");
                setProviderList(JSON.parse(valueServ))
                setProviderList2(JSON.parse(valueServ))
            }
        } catch(e) {
          // error reading value
          console.log('error', e);
        }  
    }

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        // dispatch(getCategories());
        // setCategoriesList(providers);
        setSearch('');
      }, []);

    const onSearch = (keyWord) => {
        //console.log(categoriesList);
        //console.log(responseServ);
        console.log(keyWord.trim().length);
        if(keyWord.trim().length === 0){
            setServiceProvider(false)  
        }
        else {
            setSearch(keyWord);
            setServiceProvider(true)
            setProviderList([...providerList2.filter((serv)=>(
                serv.name.toLocaleLowerCase().includes(keyWord.trim().toLocaleLowerCase())))]);
        }
    };

    return <Block flex={1} animated>
            <StatusBar style="dark" />
            <Block style={{ paddingTop: Layout.base*1.9, paddingRight: Layout.base*1.5, paddingLeft: Layout.base*1.5, flexDirection: 'row', justifyContent: 'space-between'  }}>
                <TouchableOpacity
                      onPress={()=> {
                          navigation.goBack()
                          }}
                >
                    <Icon.Ionicons
                        color={Colors.primary}
                        size={Layout.base*2}
                        name={"arrow-back"}
                    />
                </TouchableOpacity>
              
                <Block padding={1}>
                    <Text numberOfLines={1} bold h1 primary>Find a Service Provider</Text>
                </Block>
                <Block>
                </Block>
            </Block>
            <Block flex={1} animated style={{paddingBottom:1, paddingLeft:Layout.base*2, paddingRight:Layout.base*2, flex: 1}} >   
                <Text h2 style={styles.header} >Look for service cat that are in your city.</Text>
                <Input
                    search
                    placeholder="Search"
                    style={styles.input}
                    defaultValue={search}
                    onChangeText={(value) => onSearch(value)}
                />
                <Text h2 style={styles.header2} >{province}</Text>

                <Block flex={1} center >
                {
                    categoriesList == 0 ?
                    <Text h3 bold center accent>Nothing found</Text> : <Text></Text>
                }
                {
                    loading ?
                    <ActivityIndicator size="large" color={Colors.danger} />: 
                        
                    <ScrollView showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.scrollView}
                    refreshControl={
                    <RefreshControl
                        refreshing={loading}
                        onRefresh={onRefresh}
                    />
                    }
                >
                {       !serviceProvider? 
                        categoriesList.map((object, key) =>
                            <ServiceCategory 
                                label={object.label}
                                cat={object._id}
                                key={key}
                                province={province}
                                navigation={navigation}
                                listCat={listCat}
                            />
                        ) :
                                                   
                            providerList.filter((obj,id) => obj.province === province).map((object, key) => {
                                if(object.status === 1)
                                {
                                    return <Service key={key} services={object} navigation={navigation} />
                                }
                            } )       
                }
                {
                    providerList.filter((obj,id) => obj.province === province) == 0 ?
                    <Text h3 bold center accent>Nothing found</Text> : <Text></Text>
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
    header2: {
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


export default Providers;
