import React, { useRef, useState } from 'react';

function AudioBackGround({isLogin}) {
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef();
  const play = () => {
    const audio = audioRef.current;
    audio.volume = 0.3;
    if (!isPlaying) {
      setIsPlaying(true);
      audio.play();
    }
    if (isPlaying) {
      setIsPlaying(false);
      audio.pause();
    }
  };
  if(isLogin){
    
  return (
    
    <div className="AudioBackGround">
      <span>도쿄 지하철</span>
      <button onClick={play}>{isPlaying ? 's' : 'p'}</button>
      <audio
        ref={audioRef}
        src="/sound/japan.mp3"
        controlsList="nodownload"
      ></audio>
    </div>
  );

  }else{
    return (
      <></>
    )
  }

}

export default AudioBackGround;
