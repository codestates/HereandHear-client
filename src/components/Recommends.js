import React from 'react';
import { Link } from 'react-router-dom';

function Recommends({
  introTitle,
  recImg,
  title,
  place,
  text,
  handlePlay,
  weathers,
}) {
  const pathname = window.location.pathname;
  // 현재 페이지 pathname을 알 수 있음 ex) /play

  return (
    <div className="recommends">
      {weathers ? (
        <div className="recBtns">Next</div>
      ) : (
        <div className="recBtns">Top</div>
      )}

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
            <div
              className="recGoPlayBtn"
              // onClick={() => {
              //   window.location.pathname = '/play';
              // }}
            >
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
    // <div className="recButtons">
    //   {/* 현재 홈 페이지 추천창에서 플레이 페이지 가기 누르면 튕기는 현상 = 세선 쿠키가 없어서 그렇다 */}
    //   {pathname === '/' ? (
    //     <div
    //       className="goPlayPage"
    //       onClick={() => {
    //         window.location.pathname = '/play';
    //       }}
    //     >
    //       Play로 이동!
    //     </div>
    //   ) : (
    //     <div
    //       className="getPlay"
    //       onClick={() => {
    //         handlePlay();
    //       }}
    //     >
    //       바로떠나기
    //     </div>
    //   )}
    //   <button className="skip">Skip</button>
    // </div>
  );
}

export default Recommends;
