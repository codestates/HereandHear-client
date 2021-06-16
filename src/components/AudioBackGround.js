import React, { useRef,useEffect,useState } from 'react';
import Draggable from 'react-draggable';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

function AudioBackGround(props) {
  // const [isPlaying, setIsPlaying] = useState(false);
  console.log(props.history.location.state);
  const { isLogin, isPlaying, handleResponsePlay,history} =props

  const [renderData ,setRenderData]=useState('');

  // console.log(history.location.state, '----audio');
  // console.log(document.getElementsByClassName('AudioBackGround')[0].style);
 
  useEffect(()=>{
    if(history.location.state ===undefined){
        return false
    }else{
      axios.get(process.env.REACT_APP_BASE_URL + '/contents/'+ history.location.state)
      .then((res)=>{
      console.log(res,'---------------------audio');
       setRenderData(res.data)
     })
    }
   },[history.location.state])


  const audioRef = useRef();
  const play = () => {
    const audio = audioRef.current;
    audio.volume = 0.3;
    if (!isPlaying) {
      handleResponsePlay(true);
      audio.play();
    }
    if (isPlaying) {
      handleResponsePlay(false);
      audio.pause();
    }
  };

 
  if (isLogin) {
    return (
      <Draggable>
        <div className="AudioBackGround" style={{display:'none'}}>
          {/* <span>{renderData.title}</span> */}
          {isPlaying ? (
            <>
          <div className='PlayEffect'>
            <span className='Stroke'></span>
            <span className='Stroke'></span>
            <span className='Stroke'></span>
            <span className='Stroke'></span>
            <span className='Stroke'></span>
            <span className='Stroke'></span>
            <span className='Stroke'></span>
        </div>
            <button onClick={play}>
              <img src="/icon/pauseBtn.png" alt='pause'></img>
            </button>
            </>
          ) : (
            <>
                <div className='PlayEffect'>
            <span className='Stroke2'></span>
            <span className='Stroke2'></span>
            <span className='Stroke2'></span>
            <span className='Stroke2'></span>
            <span className='Stroke2'></span>
            <span className='Stroke2'></span>
            <span className='Stroke2'></span>
        </div>
            <button onClick={play}>
              <img src="/icon/playBtn.png" alt='play'></img>
            </button>
            </>
          )}

          <audio
            ref={audioRef}
            src={renderData.audioPath}
            controlsList="nodownload"
            className="audio_origin"
          ></audio>
        </div>
      </Draggable>
    );
  } else {
    return <></>;
  }


  
}

export default withRouter(AudioBackGround);
