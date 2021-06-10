import React from 'react';
import {Link} from 'react-router-dom'

function FavoriteContents() {
  const userInfo = false;
if(!userInfo){
  return <div className='FavoriteContentsOut col'>
    <div style={{
      color:'#fff',
      fontSize:"2rem"
    }}>즐겨찾기 항목이 없습니다.</div>
    <div className='MoveCategoryBtn'><Link to='/category' className='textLink'>카테고리로 이동하기</Link></div>
  </div>
}else{
  return <div className='FavoriteContentsOut'>


    <ul className='FavoriteUl'>
      {/* 이후 props로 전달받은 정보로 map 이용해서 랜더링 */}
      <li>
        <img src='/img/tokyo_subway.jpg' alt="city"/>
        <div className='FavoriteDeleteBtn'>X</div>
        <span>City</span>
        <span>도쿄 순환 지하철</span>
      </li>

    {/* 각 이미지 클릭시 play 로 넘어가고 플레이로 넘어갈때 전달받은 정보도 같이넘김 */}

      <li>
        <img src='/img/sapporo.jpg' alt="city"/>
        <div className='FavoriteDeleteBtn'>X</div>
        <span>Natural</span>
        <span>삿포로 청의 호수</span>
      </li>

      <li>
        <img src='/img/hongkong.jpg' alt="city"/>
        <div className='FavoriteDeleteBtn'>X</div>
        <span>City</span>
        <span>홍콩의 거리</span>
      </li>

      <li>
        <img src='/img/spring.jpg' alt="city"/>
        <div className='FavoriteDeleteBtn'>X</div>
        <span>Spring</span>
        <span>따뜻한 봄날</span>
      </li>



      <li>
        <img src='/img/spring.jpg' alt="city"/>
        <div className='FavoriteDeleteBtn'>X</div>
        <span>Spring</span>
        <span>따뜻한 봄날</span>
      </li>
    

      <li>
        <img src='/img/hongkong.jpg' alt="city"/>
        <div className='FavoriteDeleteBtn'>X</div>
        <span>City</span>
        <span>홍콩의 거리</span>
      </li>

      <li>
        <img src='/img/sapporo.jpg' alt="city"/>
        <div className='FavoriteDeleteBtn'>X</div>
        <span>Natural</span>
        <span>삿포로 청의 호수</span>
      </li>
      

      <li>
        <img src='/img/tokyo_subway.jpg' alt="city"/>
        <div className='FavoriteDeleteBtn'>X</div>
        <span>City</span>
        <span>도쿄 순환 지하철</span>
      </li>
    
    </ul>
  </div>;
  }
}

export default FavoriteContents;
