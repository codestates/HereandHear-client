import React from 'react';

function CategoryList({handleCategory,category }) {
  const handleRadio = (e) => {
    console.log(e.target.value, '-----radioValue');
    //라디오 버튼 클릭시 서버에 get 요청해서 해당 자료 받아서
    //슬라이드 컴포넌트로 데이터를 프롭스로 전달 !
    handleCategory(e.target.value)
    // handleCategoty(e.target);
  };



  return (
    <div className="CategoryListSlide">
      <div className="CategoryListLine"></div>
      <ul className="CategoryList">
        <li className="CategoryLi">
          <input
            type="radio"
            name="CategoryList"
            id="Remember"
            onChange={handleRadio}
            value="remember"
            defaultChecked
          ></input>
          <label htmlFor="Remember">
            <span className="CategoryTitle">REMEMBER</span>
            <div className="CategoryDot"></div>
          </label>
        </li>

        <li className="CategoryLi">
          <input
            type="radio"
            name="CategoryList"
            id="City"
            onChange={handleRadio}
            value="city"
          ></input>
          <label htmlFor="City">
            <span className="CategoryTitle">CITY</span>
            <div className="CategoryDot"></div>
          </label>
        </li>

        <li className="CategoryLi">
          <input
            type="radio"
            name="CategoryList"
            id="Natural"
            onChange={handleRadio}
            value="natural"
          ></input>
          <label htmlFor="Natural">
            <span className="CategoryTitle">NATURAL</span>
            <div className="CategoryDot"></div>
          </label>
        </li>

        <li className="CategoryLi">
          <input
            type="radio"
            name="CategoryList"
            id="Space"
            onChange={handleRadio}
            value="space"
          ></input>
          <label htmlFor="Space">
            <span className="CategoryTitle">SPACE</span>
            <div className="CategoryDot"></div>
          </label>
        </li>
      </ul>
    </div>
  );
}

export default CategoryList;
