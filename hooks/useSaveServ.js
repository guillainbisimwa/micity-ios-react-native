import React, { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

const useSaveServ = (url) =>{
    const [responseServ, setResponseServ] = useState([])
    const [loadingServ, setLoadingServ] = useState(false)
    const [hasErrorServ, setHasErrorServ] = useState(false)
    useEffect(() => {
        (async () => {
        setLoadingServ(true)
        await fetch(url, {
              method: 'GET',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
            })
            .then((responseServ) => responseServ.json())
            //If responseServ is in json then in success
            .then(async (responseJson) => {
                console.log(" ");
                console.log(" ");
                console.log("====================serv===================");
                console.log(JSON.stringify(responseJson));
                setResponseServ(responseJson);
                await AsyncStorage.setItem('@serv', JSON.stringify(responseJson))
                setLoadingServ(false)
            })
            .catch(() => {
                setHasErrorServ(true)
                setLoadingServ(false)
            })
        })();
    }, [url])
    return [ responseServ, loadingServ, hasErrorServ]
}

export default useSaveServ;
