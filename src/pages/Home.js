import React from 'react';
import BackGroundVideo from '../video/background.mp4';
import WeatherNow from '../components/WeatherNow';
import SeasonNow from '../components/SeasonNow';
import UnderArrow from '../components/UnderArrow';
function Home({isLogin}) {


  
  return (
    <>
      <div className="HomeOut">
        <div className="HomeContext">
          <div className="HomeTitle">Here & Hear</div>
          <h1 className="HomeSubTitle">
            당신이 있는 여기서 듣기만 하면 여행이 시작됩니다.
          </h1>
        </div>
        <div className="Filter"></div>
        <video className="BackGround" autoPlay muted loop>
          <source src={BackGroundVideo} type="video/mp4"></source>
        </video>
        {isLogin ? ( <UnderArrow />):(<></>)}
      </div>
      {
        isLogin
        ? <>
            <div className="RecWeathers">
              <WeatherNow />
            </div>
            <div className="RecSeasons">
              <SeasonNow />
            </div>
          </> 
        : <></>
      }
    </>
  );
}
export default Home;

