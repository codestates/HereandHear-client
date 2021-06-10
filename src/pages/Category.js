import React from 'react';
import CategoryListContents from '../components/CategoryListContents';
import CategoryListSlide from '../components/CategoryListSlide';

function Category() {
  return (
    <div className="Category">
      <div className="CategoryCopyWrite">
        당신이 떠나고 싶은 곳은 어디신가요?
      </div>

      <CategoryListSlide></CategoryListSlide>
      <CategoryListContents></CategoryListContents>
    </div>
  );
}

export default Category;
