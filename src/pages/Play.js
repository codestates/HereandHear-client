import React from 'react';
import { withRouter} from 'react-router-dom';
import PlayContents from '../components/PlayContents';
import SeasonNow from '../components/SeasonNow';
import WeatherNow from '../components/WeatherNow';


function Play(props) {
  console.log(props.history.location.pathname);
  const {handlePlay,isPlay} = props
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

export default withRouter(Play);
