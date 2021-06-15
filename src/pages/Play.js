import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import PlayContents from '../components/PlayContents';
import PlayModalPage from '../components/PlayModalPage';
import SeasonNow from '../components/SeasonNow';
import WeatherNow from '../components/WeatherNow';

function Play(props) {
  console.log(props);

  const { handlePlay, isPlay, handleResponsePlay, isPlaying, location } = props;

  console.log(props.location);
  const [isView, setView] = useState(false); //모달창 스테이트 관리

  const handleView = (result) => { // 모달창 관리
    setView(!result);
  };

  // console.log(isPlay, '--play page');
  return (
    <>
      {isPlay ? (
        <PlayContents
          data={location}
          isView={isView}
          handleView={handleView}
          handlePlay={handlePlay}
          isPlay={isPlay}
          handleResponsePlay={handleResponsePlay}
          isPlaying={isPlaying}
        />
      ) : (
        <>
          <WeatherNow handlePlay={handlePlay} />
          <SeasonNow handlePlay={handlePlay} />
        </>
      )}
      {isView ? (
        <PlayModalPage isView={isView} data={location} handleView={handleView}></PlayModalPage>
      ) : (
        <></>
      )}
    </>
  );
}

export default withRouter(Play);
