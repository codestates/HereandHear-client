import React, { useEffect, useState } from 'react'
import KakaoMapAPI from './KakaoMapAPI';

function LocationNow({handlePlay, locationScroll}){


  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    if(navigator.geolocation) {
      return navigator.geolocation.getCurrentPosition((position) => {
        // "Longitude: " + position.coords.longitude)
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      })
    } else {
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