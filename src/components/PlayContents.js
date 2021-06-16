import React, { useState,useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import DummyDatas from '../documents/DummyDatas';
import LoadingPage from '../components/LoadingPage';
import {withRouter} from 'react-router-dom';
import axios from 'axios';

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
  opacity: 0.5;

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
  z-index: 998;
  /* border: 1px solid red; */
`;

const PlayPlace = styled.div`
  width: 450px;
  font-size: 1rem;
  z-index: 998;
  /* border: 1px solid red; */
`;

const PlayBtnsContainer = styled.div`
  width: 70%;
  height: 200px;
  z-index: 998;
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
  width: 100px;
  height: 100px;
  border-radius: 50%;
  /* border: 1px solid #fff; */
  text-align: center;
  line-height: 100px;
  cursor: pointer;
  background-image: url('/icon/playBtn.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transition: all 0.4s;
  &:hover {
    transform: scale(1.3);
  }
`;

const PauseBtn = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  /* border: 1px solid #fff; */
  text-align: center;
  line-height: 100px;
  cursor: pointer;
  background-image: url('/icon/pause.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transition: all 0.4s;
  &:hover {
    transform: scale(1.3);
  }
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
  cursor: pointer;
  background-image: url('/icon/info.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transition: all 0.4s;
  &:hover {
    transform: scale(1.05);
  }
`;

const FavoriteBtn = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  cursor: pointer;
  margin-left: 20px;
  background-image: url('/icon/bookmark.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transition: all 0.4s;
  &:hover {
    transform: scale(1.05);
  }
`;

function PlayContents(props) {
  // const { title, place, recImg } = DummyDatas[0];
  // 현재는 일시적인 더미데이터. 추후 Recommneds에서 버튼을 누르면, 해당 데이터를 서버 통신 => db 경로 획득 => 서버 데이터 획득 => 클라이언트 렌더링을 해야 한다.
  
  const [renderData ,setRenderData]=useState('')

  const { isPlaying, handleResponsePlay, handleView, isView ,data,history} = props;

    console.log(data.state);

    useEffect(()=>{
     axios.get('https://ec2-18-117-241-8.us-east-2.compute.amazonaws.com:443/contents/'+ data.state)
     .then((res)=>{
     console.log(res)
      setRenderData(res.data)
    })
    },[])



  // console.log(props); 
  // console.log(isPlaying, '---sdsd');
  const [loading, setLoading] = useState(false); // 로딩창

  // 즐겨찾기 임시 스테이트
  // const [isFavorite, setFavorite] = useState(false);

  setTimeout(() => {
    setLoading(true);
  }, 2000);

  const ModalPage = () => {
    console.log('인포버튼');
    handleView(isView);
  };

  const handleFavorite = (item) => {
    axios.post('https://ec2-18-117-241-8.us-east-2.compute.amazonaws.com:443/favorite/addOrDelete',{
      "userId":  sessionStorage.getItem('id'),
    "contentId": item,
    }).then((res) => {
      alert(res.data.message)
    })
  };

  const AudioPlay = () => {
    console.log('재생버튼');
    document.getElementsByClassName('audio_origin')[0].play();
    document.getElementsByClassName('AudioBackGround')[0].style.display='flex'
;    handleResponsePlay(true);
    
  };

  const AudioPause = () => {
    console.log('정지버튼');
    document.getElementsByClassName('audio_origin')[0].pause();
    handleResponsePlay(false);
  };

  if (loading) {
    return (
      <>
        <PlayView>
          <Fillter></Fillter>
          <img src={renderData.imgPath} alt="이미지" />
          <PlayerContainer>
            <PlayUl>
              <li>
                <PlayTitle>{renderData.title}</PlayTitle>
                <PlayPlace>{renderData.location}</PlayPlace>
              </li>
              <li>
                <PlayBtnsContainer>
                  <InfoFavoriteOut>
                    <InfoBtn onClick={ModalPage}></InfoBtn>
                      <FavoriteBtn onClick={()=>handleFavorite(renderData.id)}></FavoriteBtn>
                  </InfoFavoriteOut>
                  <PlayBtneOut>
                    {isPlaying ? (
                      <PauseBtn onClick={AudioPause}></PauseBtn>
                    ) : (
                      <PlayBtn onClick={AudioPlay}></PlayBtn>
                    )}
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

export default withRouter(PlayContents);
