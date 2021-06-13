import React from 'react';
import {Link} from 'react-router-dom'
import FavoriteContents from '../components/FavoriteContents';
// import FavContexts from '../documents/FavContexts';
import DummyDatas from '../documents/DummyDatas'

function Favorite({isLogin, handlePlay}) {
  const userInfo = true;
  return (
    <>
      <div className='FavoriteContentsOut'>
          <ul className='FavoriteUl'>
      {DummyDatas.map((DummyData) => {
        if(!userInfo) {
          return (
          <div className='FavoriteContentsOut col'>
            <div style={{
              color:'#fff',
              fontSize:"2rem"
            }}>즐겨찾기 항목이 없습니다.</div>
            <div className='MoveCategoryBtn'>
              <Link to='/category' 
                className='textLink'>
                카테고리로 이동하기
              </Link>
            </div>
          </div>
          )
        } else {
          return (
            <FavoriteContents
              key={DummyData.id}
              img={DummyData.recImg}
              category={DummyData.category}
              title={DummyData.title}
              handlePlay={handlePlay}
            />
          )
        }
      })}
      </ul>
      </div>
    </>
  )
}

export default Favorite;
