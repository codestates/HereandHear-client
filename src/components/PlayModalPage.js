import React,{useEffect,useState} from 'react';
import styled ,{keyframes}from 'styled-components';
import axios from 'axios';
// import UnderArrow from './UnderArrow';
// import CategoryListContents from './CategoryListContents';
import dotenv from 'dotenv';
dotenv.config();

const PlayModal = styled.div`
  width: 100%;
  height: 100vh;
  /* min-width: 1800px; */
  background-color: #000;
  position: absolute;
  z-index: 990;
  overflow: auto;
  /* opacity: 0.8; */
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const PlayModalInside = styled.div`
  width: 60%;
  min-width: 1200px;
  height: 700px;
  /* border: 1px solid red; */
  margin: 0 auto;
  position: relative;
`;

const ModalCloseBtn = styled.div`
  width: 40px;
  height: 40px;
  border: 2px solid #ccc;
  border-radius: 50%;
  position: absolute;
  top: 40px;
  right: 40px;
  color: #ccc;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.4;
  z-index: 999;
  &:hover {
    border: none;
    background: #d21c38;
    opacity: 1;
    overflow: auto;
  }
`;

const ModalSlide = keyframes`

0%{
  background-image: url('img/seoul.jpg');

}33%{
  background-image: url('img/seoul2.jpg');

}67%{
  background-image: url('img/seoul3.jpg');
}
`

const TopImg = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 30px;
  margin-bottom: 100px;
  background-image: url('img/seoul.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  animation: 15s infinite ${ModalSlide};
  &:hover{
    animation-play-state: paused;
  }
  /* & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* opacity: 0.4; */
  //} */
`;

const Fillter = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: #000; */
  background: linear-gradient(to bottom, #00000066, #000000);
  position: absolute;
  inset: 0;
  opacity: 0.8;
`;

const Title = styled.div`
  position: absolute;
  width: 80%;
  bottom: 30%;
  color: #fff;
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  font-size: 3rem;
  left: 100px;
`;

const Place = styled.div`
  position: absolute;
  width: 80%;
  bottom: 30%;
  color: #fff;
  font-size: 1rem;
  left: 100px;
  line-height: 2rem;
  /* border: 1px solid red; */
`;

const Context = styled.div`
  position: absolute;
  width: 80%;
  bottom: 20%;
  left: 100px;
  color: #fff;
  font-size: 1rem;
  line-height: 2rem;
  /* border: 1px solid yellow; */
`;

function PlayModalPage({ handleView, isView,data }) {
  console.log(handleView);
  const [renderData ,setRenderData]=useState('')


  const ModalPage = () => {
    handleView(isView);
  };

 
  useEffect(()=>{
    axios.get(process.env.REACT_APP_BASE_URL + '/contents/'+data.state)
    .then((res)=>{
    console.log(res);
     setRenderData(res.data)
   })
   },[])


  if (isView) {
    return (
      <PlayModal className="PlayModal">
        <PlayModalInside>
          <ModalCloseBtn onClick={ModalPage}>X</ModalCloseBtn>
          <TopImg>
            <Fillter></Fillter>
            {/* <img src="img/seoul.jpg" alt="이미지"></img> */}
          </TopImg>
          <Title>{renderData.title}</Title>
          <Place>{renderData.location}</Place>
          <Context>
            {renderData.text}
          </Context>
        </PlayModalInside>
      </PlayModal>
    );
  } else {
    return <></>;
  }
}

export default PlayModalPage;
