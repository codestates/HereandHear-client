import React from 'react'

function FavoriteContents({img, category, title, handlePlay}){

  // 이제 여기서 favorite 관련 db를 만든 후, 해당 정보가 있으면 그 정보를 렌더링 하면 된다. 현재는 더미 데이터를 만들어서 적용하였음.

  // 클릭을 하면 play 페이지로 넘어가게끔 하였고, handlePlay를 통해 플레이 상태를 true로 변경하여 재생창이 뜨게끔 하였음

    return(
    
        <li onClick={()=>{
          window.location.pathname = "/play";
          //링크태그로 변경해야함
          handlePlay();
          }}>
          <img src={img} alt={category} />
          <div className='FavoriteFilter'></div>
          <div className='FavoriteDeleteBtn'>X</div>
          <span>{category}</span>
          <span>{title}</span>
        </li>
      
    )
}

export default FavoriteContents;