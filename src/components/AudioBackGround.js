import React, { useRef} from 'react';
import Draggable from 'react-draggable';


function AudioBackGround({isLogin,isPlaying,handleResponsePlay}) {
  // const [isPlaying, setIsPlaying] = useState(false);
// console.log(isPlaying);
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
  if(isLogin){
    
  return (
    <Draggable>
    <div className="AudioBackGround">
      <span>도쿄 지하철</span>
      <button onClick={play}>{isPlaying ? 's' : 'p'}</button>
      <audio
        ref={audioRef}
        src="/sound/japan.mp3"
        controlsList="nodownload"
        className='audio_origin'
      ></audio>
    </div>
    </Draggable>
  );

  }else{
    return (
      <></>
    )
  }

}

export default AudioBackGround;
