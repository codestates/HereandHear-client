import React, { useEffect, useState } from 'react'
import DummyDatas from '../documents/DummyDatas';
import Recommends from './Recommends';

function SeasonNow({handlePlay}){
  const [ monthNow, setMonthNow ] = useState(0);
  const month = new Date().getMonth() + 1; // 이렇게 하면 현재 달 나옴

  useEffect(() => {
    setMonthNow(month)
  },[month])

  return(
    <>
      {DummyDatas.map((DummyData) => {
        if(monthNow === DummyData.month) {
          return(
          <Recommends 
            key={DummyData.id}
            introTitle={DummyData.seasonTitle}
            recImg={DummyData.recImg}
            title={DummyData.title}
            place={DummyData.place}
            text={DummyData.text}
            handlePlay={handlePlay}
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




// const wholeMonths = [1,2,3,4,5,6,7,8,9,10,11,12]
// const wholeSeasons = [ // 12개월 계절별로 분화
//   {
//     spring: [3, 4]
//   },
//   {
//     summer: [5, 6, 7, 8]
//   },
//   {
//     fall: [9, 10]
//   },
//   {
//     winter: [11, 12, 1, 2]
//   }
// ]