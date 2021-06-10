import React from 'react';
import PlayContents from '../components/PlayContents';
import SeasonNow from '../components/SeasonNow';
import WeatherNow from '../components/WeatherNow';


function Play({isPlay, handlePlay}) {

  return(
    <>
      { isPlay
      ? <PlayContents handlePlay={handlePlay}/>
      : <div className="PlayRecommneds">
          <div className="PlayRecWeathers">
            <WeatherNow handlePlay={handlePlay}/>
          </div>
          <div className="PlayRecSeasons">
            <SeasonNow handlePlay={handlePlay}/>
          </div>
        </div>
      }
    </>
  )
}

export default Play;
