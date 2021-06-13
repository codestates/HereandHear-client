import React from 'react';
import { withRouter } from 'react-router-dom';
import PlayContents from '../components/PlayContents';
// import PlayModalPage from '../components/PlayModalPage';
import SeasonNow from '../components/SeasonNow';
import WeatherNow from '../components/WeatherNow';

function Play(props) {
  console.log(props.history.location.pathname);
  const { handlePlay, isPlay} = props;
  console.log(isPlay, '--play page');
  return (
    <>
      {isPlay ? (
        <PlayContents {...props} />
      ) : (
        <>
          <WeatherNow handlePlay={handlePlay} />
          <SeasonNow handlePlay={handlePlay} />
        </>
      )}
      {/* <PlayModalPage></PlayModalPage> */}
    </>
  );
}

export default withRouter(Play);
