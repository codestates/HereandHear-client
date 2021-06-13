import React, { useEffect, useState } from 'react';
import DummyDatas from '../documents/DummyDatas';
import Recommends from './Recommends';

function KakaoMapAPI({ latitude, longitude, handlePlay }){
  const {kakao} = window;
  const [ address, setAddress ] = useState("");

  // 플레이 페이지에서의 추천창이 너무 늦게 뜬다. 비동기 문제인듯!
  useEffect(()=> {
    var geocoder = new kakao.maps.services.Geocoder();

    var coord = new kakao.maps.LatLng(latitude, longitude);
    console.log(coord)
    var callback = function(result, status) {
        if (status === kakao.maps.services.Status.OK) {
          // console.log(result[0].address.region_1depth_name)
          setAddress(result[0].address.region_1depth_name)
          // console.log(address)
        }
    };
    geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
  })
  
    return(
        <div>
            {/* {address} */}
            {DummyDatas.map((DummyData) => {
              if(address === ''){
                return (<></>)
              } else if(DummyData.location === address) {
                return (
                  <Recommends 
                    key={DummyData.id}
                    introTitle={DummyData.locationTitle}
                    recImg={DummyData.recImg}
                    title={DummyData.title}
                    place={DummyData.place}
                    text={DummyData.text}
                    handlePlay={handlePlay}
                  />)
                }
              })}
        </div>
    )
}

export default KakaoMapAPI;