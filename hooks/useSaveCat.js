import React, { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

const useSaveCat = (url) =>{
    const [responseCat, setResponseCat] = useState([])
    const [loadingCat, setLoadingCat] = useState(false)
    const [hasErrorCat, setHasErrorCat] = useState(false)
    useEffect(() => {
        (async () => {
        setLoadingCat(true)
        await fetch(url, {
              method: 'GET',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
            })
            .then((responseCat) => responseCat.json())
            //If responseCat is in json then in success
            .then(async (responseJson) => {
                console.log(" ");
                console.log(" ");
                console.log("====================cat===================");
                console.log(JSON.stringify(responseJson));
                setResponseCat(responseJson);
                await AsyncStorage.setItem('@cat', JSON.stringify(responseJson))
                setLoadingCat(false)
            })
            .catch(() => {
                setHasErrorCat(true)
                setLoadingCat(false)
            })
        })();
    }, [url])
    return [ responseCat, loadingCat, hasErrorCat]
}

export default useSaveCat;
