import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

function Recommends({
  introTitle,
  recImg,
  title,
  place,
  text,
  handlePlay,
  weathers,
  weatherScroll,
  seasonScroll,
  locationScroll
}) {
  const pathname = window.location.pathname;
  // 현재 페이지 pathname을 알 수 있음 ex) /play




  const handleScrollNext = () => {
    window.scrollBy({
      top: 800,
      behavior: 'smooth'
    })
  }


  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }


  return (
    <div className="recommends">
      {locationScroll ? (
        // {seasonScroll ? (
        <div className="recBtns" onClick={handleScrollTop}>Top</div>
        ) : (
          <div className="recBtns" onClick={handleScrollNext}>Next</div>
        )
      }
      

      <ul className="recUl">
        <li>{introTitle}</li>
        <li>
          <div className="recImg">
            <div className="recImgFrame">
              <img src={recImg} alt="alt"></img>
            </div>
          </div>
          <div className="recContents">
            <div className="recContentsTitle">{title}</div>
            <div className="recContentsPlace">{place}</div>
            <div className="recContentsText">{text}</div>
          </div>
        </li>
        <li>
          {pathname === '/' ? (
            <div className="recGoPlayBtn" >
              <Link to="/play" className="textLink">
                Play
              </Link>
            </div>
          ) : (
            <div
              className="recGoPlayBtn"
              onClick={() => {
                handlePlay();
              }}
            >
              바로 떠나기
            </div>
          )}
        </li>
      </ul>
    </div>
  );
}

export default Recommends;
