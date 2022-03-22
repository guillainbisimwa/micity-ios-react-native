import React, { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

const useSaveMin = (url) =>{
    const [responseMin, setResponseMin] = useState([])
    const [loadingMin, setLoadingMin] = useState(false)
    const [hasErrorMin, setHasErrorMin] = useState(false)
    useEffect(() => {
        (async () => {
        setLoadingMin(true)
        await fetch(url, {
              method: 'GET',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
            })
            .then((responseMin) => responseMin.json())
            //If responseMin is in json then in success
            .then(async (responseJson) => {
                console.log(" ");
                console.log(" ");
                console.log("====================min===================");
                console.log(JSON.stringify(responseJson));
                setResponseMin(responseJson);
                await AsyncStorage.setItem('@min', JSON.stringify(responseJson))
                setLoadingMin(false)
            })
            .catch(() => {
                setHasErrorMin(true)
                setLoadingMin(false)
            })
        })();
    }, [url])
    return [ responseMin, loadingMin, hasErrorMin]
}

export default useSaveMin;
