import React ,{useState,useEffect}from 'react';
import BackGroundVideo from '../video/background.mp4';
import WeatherNow from '../components/WeatherNow';
import SeasonNow from '../components/SeasonNow';
import UnderArrow from '../components/UnderArrow';
import LocationNow from '../components/LocationNow';
function Home({isLogin}) {

  // 스크롤 때문에 프롭스 내려주려 함.
  const weatherScroll = 'rec1'
  const seasonScroll = 'rec2'
  const locationScroll = 'rec3'

  // 홈페이지 창 y축 포지션 확인 스테이트
  // const [position, setPosition] = useState(0);
  // const onScroll = () => {
  //   // console.log(window.scrollY)
  //   setPosition(window.scrollY);
  // }
  // useEffect(() => {
  //   window.addEventListener("scroll", onScroll);
  //   return () => {
  //     window.removeEventListener("scroll", onScroll);
  //   };
  // }, []);



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
            <WeatherNow weatherScroll={weatherScroll}/>
            <SeasonNow seasonScroll={seasonScroll} className='SeasonNow'/>
            <LocationNow locationScroll={locationScroll} />
          </> 
        : <></>
      }
    </>
  );
}
export default Home;

