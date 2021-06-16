import React, { useEffect, useState } from 'react';
import DummyDatas from '../documents/DummyDatas';
import Recommends from './Recommends';

function KakaoMapAPI({ latitude, longitude, handlePlay, locationScroll }){
  const {kakao} = window;
  const [ address, setAddress ] = useState("");

  useEffect(()=> {
    const geocoder = new kakao.maps.services.Geocoder();
    const coord = new kakao.maps.LatLng(latitude, longitude);
    const callback = function(result, status) {
        if (status === kakao.maps.services.Status.OK) {
          setAddress(result[0].address.region_1depth_name)
        }
    };
    geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
  })
  
    return(
        <div>
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
                    locationScroll={locationScroll}
                  />)
                }
              })}
        </div>
    )
}

export default KakaoMapAPI;