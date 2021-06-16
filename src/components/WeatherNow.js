import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import DummyDatas from '../documents/DummyDatas';
import Recommends from '../components/Recommends';
import dotenv from 'dotenv';
dotenv.config();

function WeatherNow({ handlePlay, weatherScroll }) {
  const [weatherNow, setWeatherNow] = useState('');
  // const weathers = true;

  // console.log(weatherScroll) // rec1

  useEffect(() => {
    const url =
    "http://api.openweathermap.org/data/2.5/weather?q=seoul&appid=aa505028cd8fe7825b8749cb42a93954"
    // `https://api.openweathermap.org/data/2.5/weather?q=seoul&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;

    axios
      .get(url)
      .then((res) => res.data)
      .then((res) => {
        // console.log(res)
        // setWeatherNow({ weatherNow: res.weather[0].main });
        // res.weather[0].main === 날씨
        // res.weather[0].id === 700번대면~ atmosphere가 문제있는거임
        console.log(res.weather[0].main)
        return res.weather[0].main;
        
      })
      .then((res) =>
        axios.post(
          `${process.env.REACT_APP_BASE_URL}/contents/recommend`,
          // "https://ec2-18-117-241-8.us-east-2.compute.amazonaws.com:443/contents/recommend",
          {
            weather: res,
          },
        ),
      )
      .then((res) => {
        console.log(res.data);
        setWeatherNow(res.data);
      });
  }, []);

  return (
    <>
      <Recommends
        key={weatherNow.id}
        id={weatherNow.id}
        introTitle={weatherNow.weatherTitle}
        recImg={weatherNow.imgPath}
        title={weatherNow.title}
        place={weatherNow.place}
        text={weatherNow.text}
        handlePlay={handlePlay}
        weatherScroll={weatherScroll}
      />
    </>
  );
}

export default WeatherNow;
