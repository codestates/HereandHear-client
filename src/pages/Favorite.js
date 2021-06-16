import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import FavoriteContents from '../components/FavoriteContents';
// import DummyDatas from '../documents/DummyDatas';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

function Favorite(props) {
  const {
    // isLogin,
    handlePlay,
    // location
  } = props;
  const [render, setRender] = useState('');

  useEffect(() => {
    axios
      .get(
        process.env.REACT_APP_BASE_URL + '/favorite/list/' +
          sessionStorage.getItem('id'),
      )
      .then((res) => {
        setRender(res.data);
      });
  }, []);

  // const userInfo = true;

  if (render.length === 0) {
    return (
      <div className="FavoriteContentsOut">
        <div className="FavoriteContentsOut col">
          <div
            style={{
              color: '#fff',
              fontSize: '2rem',
            }}
          >
            즐겨찾기 항목이 없습니다.
          </div>
          <div className="MoveCategoryBtn">
            <Link to="/category" className="textLink">
              카테고리로 이동하기
            </Link>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="FavoriteContentsOut">
        <ul className="FavoriteUl">
          {render.map((item) => {
            return (
              <FavoriteContents
                key={item.id}
                id={item.id}
                img={item.imgPath}
                category={item.category}
                title={item.title}
                handlePlay={handlePlay}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default withRouter(Favorite);
