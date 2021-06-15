import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import DummyDatas from '../documents/DummyDatas';
import Recommends from '../components/Recommends';

function WeatherNow({ handlePlay, weatherScroll }) {
  const [weatherNow, setWeatherNow] = useState('');
  // const weathers = true;

  // console.log(weatherScroll) // rec1

  useEffect(() => {
    const url =
      'http://api.openweathermap.org/data/2.5/weather?q=seoul&appid=aa505028cd8fe7825b8749cb42a93954';

    axios
      .get(url)
      .then((res) => res.data)
      .then((res) => {
        // console.log(res)
        // setWeatherNow({ weatherNow: res.weather[0].main });
        // res.weather[0].main === 날씨
        // res.weather[0].id === 700번대면~ atmosphere가 문제있는거임
        return res.weather[0].main;
      })
      .then((res) =>
        axios.post(
          'https://ec2-18-117-241-8.us-east-2.compute.amazonaws.com:443/contents/recommend',
          {
            weather: res,
          },
        ),
      )
      .then((res) => {
        // console.log(res.data.id);
        setWeatherNow(res.data);
      });
  }, []);

  return (
    <>
      <Recommends
        key={weatherNow.id}
        id={weatherNow.id}
        introTitle={weatherNow.subtitle}
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
