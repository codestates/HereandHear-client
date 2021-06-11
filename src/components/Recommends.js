import React from 'react'

function Recommends({introTitle, title, place, text, handlePlay}){
    const pathname = window.location.pathname; // 현재 페이지 pathname을 알 수 있음 ex) /play

    return(
        <div className="recommends">
          <span className="recIntroTitle">{introTitle}</span>
            <div className="recBody">
              <img className="recImg" src={recImg} alt="추천이미지"/>
              <div>
                <div className="recTitle">{title}</div>
                <div>{place}</div>
                <div>{text}</div>
              </div>
              <button className="getDown">내려가기</button>
            </div>
          <div className="recButtons">
            {/* 홈페이지에 있을 때에는 떠나기 버튼이 아니라, 플레이 페이지로 이동하기 버튼이 있어야 한다. */}
            { pathname === '/' ?(
              <button 
                className="goPlayPage" 
                onClick={() => {window.location.pathname = "/play"}}>
                플레이페이지 가기
              </button>
             ) : (
              <button 
                className="getPlay"
                onClick={() => {
                handlePlay()
                }}>
                바로떠나기
              </button>
             )
            }
            <button className="skip">Skip</button>
          </div>
        </div>
    )
}

export default Recommends;