import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DummyDatas from '../documents/DummyDatas';
import Recommends from '../components/Recommends';

function WeatherNow({handlePlay}){
  const [weatherNow, setWeatherNow] = useState("");
  
  useEffect(()=>{
    const url = 'http://api.openweathermap.org/data/2.5/weather?q=seoul&appid=aa505028cd8fe7825b8749cb42a93954'

    axios.get(url)
    .then((res) => res.data)
    .then((res) => {
      // console.log(res)
      setWeatherNow({weatherNow: res.weather[0].main})
      // res.weather[0].main === 날씨
      // res.weather[0].id === 700번대면~ atmosphere가 문제있는거임
    })
  },[])

  return(
    <>
      {DummyDatas.map((DummyData) => {
        console.log(weatherNow.weatherNow)
        if(weatherNow.weatherNow === DummyData.weather ) { // 더미데이터
        return (
        <Recommends 
          key={DummyData.id}
          introTitle={DummyData.weatherTitle}
          recImg={DummyData.recImg}
          title={DummyData.title}
          place={DummyData.place}
          text={DummyData.text}
          handlePlay={handlePlay}
        />)
      // } else if( 700 <= weatherNow.weatherNow.id && weatherNow.weatherNow.id < 800) {
      //   <Recommends 
      //     key={DummyData.id === 8}
      //     introTitle={DummyData.weatherTitle}
      //     recImg={DummyData.recImg}
      //     title={DummyData.title}
      //     place={DummyData.place}
      //     text={DummyData.text}
      //     handlePlay={handlePlay}
      //   />
      } else {
        return '';
      }
      })}
    </>
  )
}

export default WeatherNow;