import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import DummyDatas from '../documents/DummyDatas';
import LoadingPage from '../components/LoadingPage';

const BackAni = keyframes`
0%{
  transform:scale(1);
}
50%{
  transform:scale(1.5);
}
100%{
  transform:scale(1);

}
`;

const BackAniOp = keyframes`
0%{
  opacity: 0.7;
}
50%{
  opacity: 0.3;

}
100%{
  opacity: 0.7;
}
`;

const PlayView = styled.div`
  position: absolute;
  z-index: 3;
  box-sizing: border-box;
  width: 100%;
  color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    z-index: -1;
    animation: 300s ease ${BackAni} infinite;
  }
`;

const Fillter = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.8;
  animation: 300s ease ${BackAniOp} infinite;
`;

const PlayerContainer = styled.div`
  width: 500px;
  height: 380px;
  /* border: 6px solid blue; */
  opacity: 0.4;
  transition: all 0.4s;
  &:hover {
    opacity: 1;
  }
`;

const PlayUl = styled.ul`
  /* border: 1px solid #ccc; */
  width: 100%;
  height: 100%;

  & li:nth-child(1) {
    width: 100%;
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    /* background-color: green; */
    text-align: center;
  }

  & > li:nth-child(2) {
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-color: blue; */
  }
`;

const PlayTitle = styled.div`
  width: 450px;
  font-size: 3rem;
  margin-bottom: 20px;
  z-index: 999;
  /* border: 1px solid red; */
`;

const PlayPlace = styled.div`
  width: 450px;
  font-size: 1rem;
  z-index: 999;
  /* border: 1px solid red; */
`;

const PlayBtnsContainer = styled.div`
  width: 70%;
  height: 200px;
  z-index: 999;
  /* border: 1px solid yellow; */
`;

const PlayBtneOut = styled.div`
  width: 100%;
  height: 150px;
  /* border: 1px solid yellowgreen; */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PlayBtn = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 1px solid #fff;

  text-align: center;
  line-height: 80px;
  margin-right: 30px;
  cursor: pointer;
`;

const PauseBtn = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 1px solid #fff;
  text-align: center;
  line-height: 80px;
  cursor: pointer;
`;

const InfoFavoriteOut = styled.div`
  width: 100%;
  height: 50px;
  /* border: 1px solid #ccc; */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InfoBtn = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 30px;
  cursor: pointer;
  background-image: url('/icon/info.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const FavoriteBtn = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  cursor: pointer;
  background-image: url('/icon/bookmark1.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

function PlayContents(props) {
  const { title, place, recImg } = DummyDatas[0];
  // 현재는 일시적인 더미데이터. 추후 Recommneds에서 버튼을 누르면, 해당 데이터를 서버 통신 => db 경로 획득 => 서버 데이터 획득 => 클라이언트 렌더링을 해야 한다.
  const { isPlaying,handleResponsePlay } = props;

  console.log(isPlaying,'---sdsd');
  const [loading, setLoading] = useState(false);
  setTimeout(() => {
    setLoading(true);
  }, 2000);

  const AudioPlay = () => {
   console.log('재생버튼')
   document.getElementsByClassName('audio_origin')[0].play();
   handleResponsePlay(true);
  };

  const AudioPause = () => {
   console.log('정지버튼')
   document.getElementsByClassName('audio_origin')[0].pause();
   handleResponsePlay(false);
  };

  if (loading) {
    return (
      <>
        <PlayView>
          <Fillter></Fillter>
          <img src={recImg} alt="이미지" />
          <PlayerContainer>
            <PlayUl>
              <li>
                <PlayTitle>{title}</PlayTitle>
                <PlayPlace>{place}</PlayPlace>
              </li>
              <li>
                <PlayBtnsContainer>
                  <InfoFavoriteOut>
                    <InfoBtn></InfoBtn>
                    <FavoriteBtn></FavoriteBtn>
                  </InfoFavoriteOut>
                  <PlayBtneOut>
                    <PlayBtn onClick={AudioPlay}>play</PlayBtn>
                    <PauseBtn onClick={AudioPause}>Pause</PauseBtn>
                  </PlayBtneOut>
                </PlayBtnsContainer>
              </li>
            </PlayUl>
          </PlayerContainer>
        </PlayView>
      </>
    );
  } else {
    return <LoadingPage />;
  }
}

export default PlayContents;
