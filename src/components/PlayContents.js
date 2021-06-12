import React from 'react';
import styled from 'styled-components';
import DummyDatas from '../documents/DummyDatas'



function PlayContents({handlePlay}){
  const {title, place, text, recImg} = DummyDatas[0]
  // 현재는 일시적인 더미데이터. 추후 Recommneds에서 버튼을 누르면, 해당 데이터를 서버 통신 => db 경로 획득 => 서버 데이터 획득 => 클라이언트 렌더링을 해야 한다.

  return(
  <>
    <div className="View">
    <img className="ViewImg" src={recImg} alt="이미지" />
      <div className="ContentsPlayer">
        <div className="PlayHead">
          <div className="PlayTitle">{title}</div>
          <div className="InfoBtn">인포 버튼</div>
          <div className="FavBtn">즐찾 버튼</div>
        </div>
        <div className="PlayBody">
          <div className="BodyPlace">{place}</div>
          <div className="BodyText">{text}</div>
        </div>
        <div className="PlayFooter">
          <div className="PlayBtn">플레이 버튼</div>
          <div className="PauseBtn" onClick={handlePlay}>정지 버튼</div>
        </div>
      </div>     
    </div>  
  </>
    )
}

export default PlayContents;