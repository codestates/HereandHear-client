import React from 'react'


function Recommends({introTitle, title, place, text, recImg}){
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
            <button className="getPlay">바로떠나기</button>
            <button className="skip">Skip</button>
          </div>
        </div>
    )
}

export default Recommends;