import React, { useEffect, useState } from 'react'
import RecSeasons from '../documents/RecSeasons';
import Recommends from './Recommends';

function SeasonNow({handlePlay, isPlay}){
  const [ monthNow, setMonthNow ] = useState(0);
  const month = new Date().getMonth() + 1; // 이렇게 하면 현재 달 나옴

  useEffect(() => {
    setMonthNow(monthNow - monthNow + month)
  })

  return(
    <>
      {RecSeasons.map((season) => {
        if(monthNow === season.id) {
          return(
          <Recommends 
            key={season.id}
            introTitle={season.introTitle}
            title={season.title}
            place={season.place}
            text={season.text}
            handlePlay={handlePlay}
            isPlay={isPlay}
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