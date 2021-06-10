import React, { useEffect, useState } from 'react'

function PlayNow(){
  const [ playNow, setplayNow ] = useState(false);
  
  useEffect(() => {
    setplayNow(!playNow)
  })

  // isLogin의 여부를 갖고 아래의 리턴 값을 정의하면 될듯!
    return(
      <>
        {/* {RecSeasons.map((season) => {
            if(monthNow === season.id) {
              return(
              <Recommends 
                key={season.id}
                introTitle={season.introTitle}
                title={season.title}
                place={season.place}
                text={season.text}
              />)
            } else {
              return '';
            }
          }
        )}       */}
      </>
    )
}

export default PlayNow;