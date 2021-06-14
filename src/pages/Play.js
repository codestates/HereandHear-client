import React,{useState} from 'react';
import { withRouter } from 'react-router-dom';
import PlayContents from '../components/PlayContents';
import PlayModalPage from '../components/PlayModalPage';
import SeasonNow from '../components/SeasonNow';
import WeatherNow from '../components/WeatherNow';

function Play(props) {
  console.log(props.history.location.pathname);
  const { handlePlay, isPlay} = props;

  const [isView,setView] =useState(false);

  const handleView =(result)=>{
    setView(!result);
  }

  console.log(isPlay, '--play page');
  return (
    <>
      {isPlay ? (
        <PlayContents isView={isView} handleView={handleView} handlePlay={handlePlay} isPlay={isPlay} />
      ) : (
        <>
          <WeatherNow handlePlay={handlePlay} />
          <SeasonNow handlePlay={handlePlay} />
        </>
      )}
      {isView ? (<PlayModalPage isView={isView} handleView={handleView}></PlayModalPage>):(<></>)}
      
    </>
  );
}

export default withRouter(Play);
