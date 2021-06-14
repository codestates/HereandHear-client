import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled, { keyframes } from 'styled-components';

const SlideLoad = keyframes`
0%{
  opacity:0;
}
100%{
  opacity:1;

}
`
const Container = styled.div`
  // border: 1px solid red;
  width: 80%;
  height: 500px;
  min-height: 500px;
  margin: 0 auto;
  animation : 4s ease-out ${SlideLoad} ;
`;

const StyledSlider = styled(Slider)`
  .slick-slide div {
    outline: none;
  }
`;

const ImageContainer = styled.div`
  width: 350px;
  height: 500px;
  min-height: 500px;
  margin: 0 50px;
  border-radius: 30px;
  overflow: hidden;
  position: relative;
  &:hover{
    border: 3px solid #fff;
    & img{
      transform:scale(1.1);
      opacity:1;
    }
  }
`;

const Image = styled.img`
  width: 350px;
  height: 500px;
  min-height: 500px;
  object-fit: cover;
  transition: all 2s;
  opacity:0.4;

`;

const items = [
  { id: '도쿄 지하철',url:'/img/tokyo_subway.jpg' },
  { id: '도쿄 지하철',url:'/img/seoul.jpg' },
  { id: '도쿄 지하철',url:'/img/sapporo.jpg' },
  { id: '도쿄 지하철' ,url:'/img/tokyo_subway.jpg'},
  { id: '도쿄 지하철',url:'/img/sapporo.jpg' },
  { id: '도쿄 지하철',url:'/img/seoul.jpg'  },
  { id: '도쿄 지하철',url:'/img/sapporo.jpg' },
  { id: '도쿄 지하철' ,url:'/img/tokyo_subway.jpg'},
  { id: '도쿄 지하철',url:'/img/seoul.jpg'  },
  { id: '도쿄 지하철',url:'/img/sapporo.jpg' },

 
];

function CategoryListContents(props) {
  console.log(props , "----list");

  const MovePlay = (e) =>{
    console.log(e.target);
  }


  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // centerMode: true,
    arrows: true,
  };

  return (
    <div className="CategoryListContents">
      <Container>
        <StyledSlider {...settings}>
          {items.map((item) => {
            return (
              <div key={item.id} onClick={MovePlay}>
                <ImageContainer>
                  <Image src={item.url} />
                  <div
                    style={{
                      color: '#fff',
                      fontSize: '2rem',
                      position: 'absolute',
                      bottom: '80px',
                      left: '20px',
                    }}
                  >
                    {item.id}
                  </div>
                  <div
                   style={{
                    color: '#fff',
                    fontSize: '1rem',
                    position: 'absolute',
                    bottom: '40px',
                    left: '20px',
                  }}>
                  Tokyo, Japan
                  </div>
                </ImageContainer>
              </div>
            );
          })}
        </StyledSlider>
      </Container>
    </div>
  );
}

export default CategoryListContents;
