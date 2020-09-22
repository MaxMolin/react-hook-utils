import {useEffect, useState} from 'react';

export const GEOIP_REQUEST_URL = 'https://extreme-ip-lookup.com/json/';

export default function useGeoIp () {
  const [result, setResult] = useState({});
  useEffect(() => {
    fetch(GEOIP_REQUEST_URL)
      .then( res => res.json())
      .then(response => setResult(response))
      .catch((e) => {
        setResult({ error: e })
      })
  }, []);
  return result;
}
