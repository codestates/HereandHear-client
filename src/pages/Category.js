import React, { useEffect } from 'react';
import { useState } from 'react';
import CategoryListContents from '../components/CategoryListContents';
import CategoryList from '../components/CategoryList';
import LoadingPage from '../components/LoadingPage';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

function Category({isPlay,handlePlay ,isLogin}) {
  const [loading, setLoading] = useState(false);
  const [data , setdata] = useState('')
  const [category ,setCategory] =useState("remember")

  const handleCategory = (result)=> {
    setCategory(result)
  }
  useEffect(()=>{
      axios.post(process.env.REACT_APP_BASE_URL + "/contents/category",{
          'category':category
      }).then((res)=>{
        setdata(res.data);
        setLoading(true)
      })
    
  },[category])

  if (loading) {
    return (
      <div className="Category">
        <div className="CategoryCopyWrite">
          당신이 떠나고 싶은 곳은 어디신가요?
        </div>
        <CategoryList handleCategory={handleCategory} category={category} ></CategoryList>
        <CategoryListContents data={data} handlePlay={handlePlay} isPlay={isPlay} isLogin={isLogin}></CategoryListContents>
      </div>
    );
  } else {
    return <LoadingPage />;
  }
}

export default Category;
