import React ,{useState,useEffect}from 'react';
import BackGroundVideo from '../video/background.mp4';
import WeatherNow from '../components/WeatherNow';
import SeasonNow from '../components/SeasonNow';
import UnderArrow from '../components/UnderArrow';
import LocationNow from '../components/LocationNow';
function Home({isLogin}) {

  const [ScrollY, setScrollY] = useState(0);
  const [isArrow, setArrow] =useState(true);
  const handleFollow = () => {
    setScrollY(window.pageYOffset); 
    if(ScrollY>300){
      setArrow(false);
    }else{
      setArrow(true);
    }
  }

  // useEffect(() => {
  //   // console.log("ScrollY is ", ScrollY); 
  // }, [ScrollY])


  useEffect(() => {
    const watch = () => {
      window.addEventListener('scroll', handleFollow);
    }
    watch(); 
    return () => {
      window.removeEventListener('scroll', handleFollow); 
    }
  })


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
        {isLogin&& isArrow ? ( <UnderArrow />):(<></>)}
      </div>
      {
        isLogin
        ? <>

              <WeatherNow/>
              <SeasonNow className='SeasonNow'/>
              <LocationNow />
          </> 
        : <></>
      }
    </>
  );
}
export default Home;

