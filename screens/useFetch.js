import React, { useEffect, useState } from "react";

const useFetch = (url, opts, prov) =>{
    const [response, setResponse] = useState([])
    const [loadingg, setLoadingg] = useState(false)
    const [hasError, setHasError] = useState(false)
    useEffect(() => {
        (async () => {
        setLoadingg(true)
        await fetch(url, {
              method: 'GET',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
            })
            .then((response) => response.json())
            //If response is in json then in success
            .then((responseJson) => {
                console.log(responseJson);
                setResponse(responseJson);
                setLoadingg(false)
            })
            .catch(() => {
                setHasError(true)
                setLoadingg(false)
            })
        })();
    }, [ url, prov ])
    return [ response, loadingg, hasError ]
}

export default useFetch;
