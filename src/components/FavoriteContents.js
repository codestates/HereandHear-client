import React from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import dotenv from 'dotenv';
dotenv.config();

function FavoriteContents(props){
  const {img, category, title, handlePlay,id:contentId,history} = props;
  // 이제 여기서 favorite 관련 db를 만든 후, 해당 정보가 있으면 그 정보를 렌더링 하면 된다. 현재는 더미 데이터를 만들어서 적용하였음.
  // 클릭을 하면 play 페이지로 넘어가게끔 하였고, handlePlay를 통해 플레이 상태를 true로 변경하여 재생창이 뜨게끔 하였음

  const DeleteContent =() =>{
    axios.post(process.env.REACT_APP_BASE_URL + '/favorite/addOrDelete',{
      "userId":  sessionStorage.getItem('id'),
      "contentId": contentId,
    }, {
      "Content-Type": "application/json"
    })
    .then(res => {
      alert(res.data.message)
      window.location.reload()
    })
  }

  const goPlay =(item) =>{
    history.push({ pathname: '/play', state: item });
    handlePlay(true);
  }

    return(
        <li>
          <img src={img} alt={category} />
          <div className='FavoriteFilter' onClick={()=>goPlay(contentId)}></div>
          <div className='FavoriteDeleteBtn' onClick={() => DeleteContent()}>X</div>
          <span>{category}</span>
          <span>{title}</span>
        </li>
      
    )
}

export default withRouter(FavoriteContents);