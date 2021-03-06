import React, { useEffect, useState } from 'react';
// import DummyDatas from '../documents/DummyDatas';
import Recommends from './Recommends';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

function SeasonNow({ handlePlay, seasonScroll }) {
  const [monthNow, setMonthNow] = useState(0);
  const month = new Date().getMonth() + 1; // 이렇게 하면 현재 달 나옴
  const weathers = false;

  useEffect(() => {
    axios
      .post(
        process.env.REACT_APP_BASE_URL + '/contents/recommend',
        {
          month: month,
        },
      )
      .then((res) => {
        // console.log(res);
        setMonthNow(res.data);
      });
  }, []);

  // console.log(seasonScroll) // rec2

  return (
    <>
      <Recommends
        key={monthNow.id}
        id={monthNow.id}
        introTitle={monthNow.seasonTitle}
        recImg={monthNow.imgPath}
        title={monthNow.title}
        place={monthNow.place}
        text={monthNow.text}
        handlePlay={handlePlay}
        weathers={weathers}
        seasonScroll={seasonScroll}
      />
    </>
  );
}

export default SeasonNow;
