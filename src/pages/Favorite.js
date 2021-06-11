import React from 'react';
import {Link} from 'react-router-dom'
import FavoriteContents from '../components/FavoriteContents';
import FavContexts from '../documents/FavContexts';

function Favorite({handlePlay}) {
  const userInfo = true;
  return (
    <>
      <div className='FavoriteContentsOut'>
          <ul className='FavoriteUl'>
      {FavContexts.map((FavContext) => {
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
              key={FavContext.id}
              img={FavContext.img}
              category={FavContext.category}
              title={FavContext.title}
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
