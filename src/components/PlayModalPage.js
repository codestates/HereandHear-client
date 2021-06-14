import React from 'react';
import styled from 'styled-components';
// import UnderArrow from './UnderArrow';
// import CategoryListContents from './CategoryListContents';

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

const TopImg = styled.div`
  width: 100%;
  height: 100%;
  /* border: 4px solid pink; */
  margin-bottom: 100px;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* opacity: 0.4; */
  }
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

function PlayModalPage({ handleView, isView }) {
  console.log(handleView);
  const ModalPage = () => {
    handleView(isView);
  };

  if (isView) {
    return (
      <PlayModal className="PlayModal">
        <PlayModalInside>
          <ModalCloseBtn onClick={ModalPage}>X</ModalCloseBtn>
          <TopImg>
            <Fillter></Fillter>
            <img src="img/seoul.jpg"></img>
          </TopImg>
          <Title>서울 광화문</Title>
          <Place>Seoul, Korea</Place>
          <Context>
            비에이초(美栄町)의 인기 관광지인 ‘시로가네 청의 호수 (白金 青い池,
            일본어 그대로 아오이 이케라고도 함)’는 홋카이도를 대표하는 “절경
            장소”로 지금은 일본 전국 및 세계에도 그 이름을 알릴 정도로
            아름답다고 합니다.
          </Context>
        </PlayModalInside>
      </PlayModal>
    );
  } else {
    return <></>;
  }
}

export default PlayModalPage;
