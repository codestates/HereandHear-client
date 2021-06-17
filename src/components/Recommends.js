import React from 'react';
import { withRouter } from 'react-router-dom';

function Recommends(props) {
  const {
    introTitle,
    recImg,
    title,
    // place,
    text,
    handlePlay,
    // weathers,
    // weatherScroll,
    seasonScroll,
    // locationScroll,
    history,
    id,
    // location
  } = props;

  // console.log(props);

  // const pathname = window.location.pathname;
  // 현재 페이지 pathname을 알 수 있음 ex) /play

  const goPlay = (item) => {
    history.push({ pathname: '/play', state: item });
    handlePlay(true);
  };

  const handleScrollNext = () => {
    window.scrollBy({
      top: 800,
      behavior: 'smooth',
    });
  };

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="recommends">
      {seasonScroll ? (
        <div className="recBtns" onClick={handleScrollTop}>
          <img src='/icon/updown.png' alt="alt"></img>
        </div>
      ) : (
        <div className="recBtns" onClick={handleScrollNext}>
          <img src='/icon/updown.png' style={{
            transform:'rotate(180deg)'
          }} alt="alt"></img>
        </div>
      )}

      <ul className="recUl">
        <li>{introTitle}</li>
        <li>
          <div className="recImg">
            <div className="recImgFrame">
              <img src={recImg} alt="alt"></img>
            </div>
          </div>
          <div className="recContents">
            <div className="recContentsTitle">{title}</div>
            {/* <div className="recContentsPlace">{place}</div> */}
            <div className="recContentsText">{text}</div>
          </div>
        </li>
        <li>
          <div className="recGoPlayBtn" onClick={() => goPlay(id)}>
            Play
          </div>
        </li>
      </ul>
    </div>
  );
}

export default withRouter(Recommends);
