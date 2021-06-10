import React, { useEffect, useState } from 'react';
import PlayNow from './PlayNow';


function PlayContents(){
  return(
  <>
    {PlayNow ? (
    <div className="View">
      <div className="ContentsPlayer">
        <div className="PlayHead">
          <div className="PlayTitle">타이틀</div>
          <button className="InfoBtn">인포 버튼</button>
          <button className="FavBtn">즐찾 버튼</button>
        </div>
        <div className="PlayBody">
          블라블라~
        </div>
        <div className="playFooter">
          <button>플레이 버튼</button>
          <button>정지 버튼</button>
        </div>
      </div>    
    </div>  
    ) : ( ''
    )}
  </>
    )
}

export default PlayContents;