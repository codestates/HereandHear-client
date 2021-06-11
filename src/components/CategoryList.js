import React from 'react';

function CategoryList({ handleCategoty }) {
  const GotoPlay = (e) => {
    handleCategoty(e.target);
  };

  return (
    <div className="CategoryListSlide">
      <div className="CategoryListLine"></div>
      <ul className="CategoryList">
        <li className="CategoryLi" onClick={GotoPlay}>
          <span className="CategoryTitle">REMEMBER</span>
          <div className="CategoryDot"></div>
        </li>

        <li className="CategoryLi" onClick={GotoPlay}>
          <span className="CategoryTitle">CITY</span>
          <div className="CategoryDot"></div>
        </li>

        <li className="CategoryLi" onClick={GotoPlay}>
          <span className="CategoryTitle click">NATURAL</span>
          <div className="CategoryDot click"></div>
        </li>

        <li className="CategoryLi" onClick={GotoPlay}>
          <span className="CategoryTitle">SPACE</span>
          <div className="CategoryDot"></div>
        </li>
      </ul>
    </div>
  );
}

export default CategoryList;
