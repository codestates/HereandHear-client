import React, { useEffect, useState } from 'react'
import KakaoMapAPI from './KakaoMapAPI';

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
      })
    } else {
      console.log("Geolocation is not supported by this browser.")
    }
  })

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