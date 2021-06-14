import React, { useEffect, useState } from 'react'
import KakaoMapAPI from './KakaoMapAPI';

function LocationNow({handlePlay, locationScroll}){


  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  // console.log(locationScroll) // rec3

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
      return (<></>)
    }
  }, [latitude, longitude]);

  return (
    <div>
      <KakaoMapAPI 
        key={latitude}
        latitude={latitude} 
        longitude={longitude} 
        handlePlay={handlePlay}
        locationScroll={locationScroll}
      />
    </div>
  )
}

export default LocationNow;