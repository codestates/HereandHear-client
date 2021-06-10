import React from 'react';


function PlayContents(props){
  return(
  <>
    <div className="View">
      <div className="ContentsPlayer">
        <div className="PlayHead">
          <div className="PlayTitle">타이틀(변수)</div>
          <button className="InfoBtn">인포 버튼</button>
          <button className="FavBtn">즐찾 버튼</button>
        </div>
        <div className="PlayBody">
          <div className="BodyPlace">장소(변수)</div>
          <div className="BodyText">본문(변수)</div>
        </div>
        <div className="playFooter">
          <button>플레이 버튼</button>
          <button onClick={props.handlePlay}>정지 버튼</button>
        </div>
      </div>    
    </div>  
  </>
    )
}

export default PlayContents;