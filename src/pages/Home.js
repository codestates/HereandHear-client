import React from 'react';
import BackGroundVideo from '../video/background.mp4';
function Home() {
  return (
    <>
    <div className="HomeOut">
      <div className="HomeContext">
        <div className="HomeTitle">Here & Hear</div>
        <div className="HomeSubTitle">
          당신이 있는 여기서 듣기만 하면 여행이 시작됩니다.
        </div>
      </div>
      <div className="HomeFilter"></div>
      <video className="HomeBackGround" autoPlay muted loop>
        <source src={BackGroundVideo} type="video/mp4"></source>
      </video>
    </div>
     {/* 추천 */}
     <div style={
        {
          backgroundColor : 'red',
          width: '100%',
          height: '800px'
        }
      }>
      </div>

      <div style={
        {
          backgroundColor : 'green',
          width: '100%',
          height: '800px'
        }
      }>
      </div>

      <div style={
        {
          backgroundColor : 'yellow',
          width: '100%',
          height: '800px'
        }
      }>
      </div>
    </>
  );
}

export default Home;
