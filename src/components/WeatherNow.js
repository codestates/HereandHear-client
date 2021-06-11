import axios from 'axios';
import React, { useEffect, useState } from 'react';
import RecWeathers from '../documents/RecWeathers';
import Recommends from '../components/Recommends';

function WeatherNow({handlePlay, isPlay}){
  const [weatherNow, setWeatherNow] = useState("");
  
  useEffect(()=>{
    const url = 'http://api.openweathermap.org/data/2.5/weather?q=seoul&appid=aa505028cd8fe7825b8749cb42a93954'

    axios.get(url)
    .then((res) => res.data)
    .then((res) => {
      setWeatherNow({weatherNow: res.weather[0].main})
    })
  },[])

  return(
    <>
      {RecWeathers.map((weather) => {
        // console.log(weatherNow.weatherNow)
        if(weatherNow.weatherNow === weather.id ) { // 더미데이터
        return (
        <Recommends 
          key={weather.id}
          introTitle={weather.introTitle}
          title={weather.title}
          place={weather.place}
          text={weather.text}
          handlePlay={handlePlay}
          isPlay={isPlay}
        />)
      } else {
        return '';
      }
      })}
    </>
  )
}

export default WeatherNow;