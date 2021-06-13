import React from 'react';
import styled from 'styled-components';
import UnderArrow from './UnderArrow';
// import CategoryListContents from './CategoryListContents';

const PlayModal = styled.div`
  width: 100%;
  height: 100vh;
  min-width: 1800px;
  background-color: black;
  position: absolute;
  z-index: 999;
  overflow: auto;
`;

const PlayModalInside = styled.div`
  width: 100%;
  min-width: 1800px;
  height: auto;
  // border: 1px solid red;
  margin: 0 auto;
  position: relative;
  padding-bottom: 50px;
`;

const ModalCloseBtn = styled.div`
  width: 60px;
  height: 60px;
  border: 2px solid #ccc;
  border-radius: 50%;
  position: fixed;
  top: 40px;
  right: 40px;
  color: #ccc;
  font-size: 2rem;
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
    color: #fff;
  }
`;

const TopImg = styled.div`
  width: 100%;
  height: 800px;
  // border: 1px solid pink;
  margin-bottom: 100px;
  & img {
    width: 100%;
    height: 800px;
    object-fit: cover;
  }
`;

const Fillter = styled.div`
  width: 100%;
  height: 800px;
  // background-color:#000;
  background: linear-gradient(to bottom, #00000066, #000);
  position: absolute;
`;

const ModalText = styled.div`
  width: 80%;
  margin: 0 auto;
  height: 1000px;
  border: 1px solid yellow;
  margin-bottom: 100px;
`;

function PlayModalPage() {
  const handleModal = () => {
    console.log('close');
  };

  return (
    <PlayModal className="PlayModal">
      <UnderArrow />
      <ModalCloseBtn onClick={handleModal}>X</ModalCloseBtn>
      <PlayModalInside>
        <TopImg>
          <Fillter></Fillter>
          <img src="/img/tokyo_subway.jpg" alt='alt'></img>
          <span
            style={{
              position: 'absolute',
              color: '#fff',
              fontSize: '4rem',
              zIndex: '999',
              top: '100px',
              left: '100px',
            }}
          >
            도쿄 순환철도
          </span>
        </TopImg>
        <ModalText></ModalText>

        {/* <CategoryListContents /> */}
      </PlayModalInside>
    </PlayModal>
  );
}

export default PlayModalPage;
