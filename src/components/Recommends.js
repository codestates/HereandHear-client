import React from 'react'

function Recommends({introTitle, recImg, title, place, text, handlePlay}){
    const pathname = window.location.pathname; // 현재 페이지 pathname을 알 수 있음 ex) /play

    return(
        <div className="recommends">
          <div className="recIntroTitle">{introTitle}</div>
            <div className="recBody">
              <img className="recImg" src={recImg} alt="추천이미지"/>
              <div className="recDetail">
                <div className="recTitle">{title}</div>
                <div className="recPlace">{place}</div>
                <div className="recText">{text}</div>
              </div>
              <div className="getDown">
                Down
                <div className="getDownBtn"></div>
              </div>
            </div>
          <div className="recButtons">
            {/* 현재 홈 페이지 추천창에서 플레이 페이지 가기 누르면 튕기는 현상 = 세선 쿠키가 없어서 그렇다 */}
            { pathname === '/' ?(
              <button 
                className="goPlayPage" 
                onClick={() => {window.location.pathname = "/play"}}
                >
                Play로 이동!
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