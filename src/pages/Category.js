import React, { useEffect } from 'react';
import { useState } from 'react';
import CategoryListContents from '../components/CategoryListContents';
import CategoryList from '../components/CategoryList';
import LoadingPage from '../components/LoadingPage';

function Category() {
  const [loading, setLoading] = useState(false);

    const [data , setdata] = useState('')

    //  data state 기본값 설정해놓기

  useEffect(()=>{
      console.log('--- 로딩이됨;')
    setdata(data);
    console.log(data);
  },[data])

  const handleCategoty = (result) =>{
    // console.log(result);
    setdata(result);
  }


  setTimeout(() => {
    setLoading(true);
  }, 1500);

  if (loading) {
    return (
      <div className="Category">
        <div className="CategoryCopyWrite">
          당신이 떠나고 싶은 곳은 어디신가요?
        </div>
        <CategoryList handleCategoty={handleCategoty}></CategoryList>
        <CategoryListContents data={data}></CategoryListContents>
      </div>
    );
  } else {
    return <LoadingPage />;
  }
}

export default Category;
