import React, { useEffect, useState } from 'react'
import KakaoMapAPI from './KakaoMapAPI';
// import * as Location from "expo-location";

function LocationNow({handlePlay}){


  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    if(navigator.geolocation) {
      return navigator.geolocation.getCurrentPosition((position) => {
        // console.log( "Latitude: " + position.coords.latitude + 
        // "Longitude: " + position.coords.longitude)
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        // console.log(latitude, longitude)
      })
    } else {
      console.log("Geolocation is not supported by this browser.")
    }
  })

  // expo-location으로 실험해본 코드
  // const geoLocation = async() => {
  //   try{
  //     const response = await Location.requestForegroundPermissionsAsync();
  //     console.log(response);
  //     const location = await Location.getCurrentPositionAsync();
  //     console.log(location)
  //   } catch(error) {
  //     Alert.alert("fuckyou", "Codestates")
  //   }
  // }

  // useEffect( async () => {
  //   geoLocation()
  // })

  return (
    <div>
      <KakaoMapAPI 
        latitude={latitude} 
        longitude={longitude} 
        handlePlay={handlePlay}
      />
    </div>
  )
}

export default LocationNow;