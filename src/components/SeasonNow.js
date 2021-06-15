import React, { useEffect, useState } from 'react'
import DummyDatas from '../documents/DummyDatas';
import Recommends from './Recommends';

function SeasonNow({handlePlay, seasonScroll}){
  const [ monthNow, setMonthNow ] = useState(0);
  const month = new Date().getMonth() + 1; // 이렇게 하면 현재 달 나옴
  const weathers = false;
  useEffect(() => {
    setMonthNow(month)
  },[month])

  // console.log(seasonScroll) // rec2

  return(
    <>
      {DummyDatas.map((DummyData) => {
        if(monthNow === DummyData.month) {
          return(
          <Recommends 
            className={seasonScroll}
            key={DummyData.id}
            introTitle={DummyData.seasonTitle}
            recImg={DummyData.recImg}
            title={DummyData.title}
            place={DummyData.place}
            text={DummyData.text}
            handlePlay={handlePlay}
            weathers={weathers}
            // seasonScroll={seasonScroll}
          />)
        } else {
          return '';
        }
      }
      )}
    </>
  )
}

export default SeasonNow;