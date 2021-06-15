import React, { useRef } from 'react';
import Draggable from 'react-draggable';
import { withRouter } from 'react-router-dom';

function AudioBackGround({ isLogin, isPlaying, handleResponsePlay,history}) {
  // const [isPlaying, setIsPlaying] = useState(false);
  // console.log(history, '----audio');
  // console.log(document.getElementsByClassName('AudioBackGround')[0].style);
 

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
          <span>도쿄 지하철</span>
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
            src="/sound/japan.mp3"
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
