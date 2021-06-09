import React from 'react';
import Recommends from '../components/Recommends';
import BackGroundVideo from '../video/background.mp4';
import RecWeathers from '../documents/RecWeathers';
import RecSeasons from '../documents/RecSeasons';
import axios from 'axios';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherNow : ''
    }
  }

  componentDidMount() {
    const url = 'http://api.openweathermap.org/data/2.5/weather?q=seoul&appid=aa505028cd8fe7825b8749cb42a93954'

    axios.get(url)
    .then(res => res.data)
    .then(res => {
      // console.log(res.weather[0].main)
      this.setState({weatherNow: res.weather[0].main})
      console.log(this.state.weatherNow)
    })
  }

  render(){
    return (
      <>
        <div className="HomeOut">
          <div className="HomeContext">
            <div className="HomeTitle">Here & Hear</div>
            <div className="HomeSubTitle">
              당신이 있는 여기서 듣기만 하면 여행이 시작됩니다.
            </div>
          </div>
          <div className="HomeFilter"></div>
          <video className="HomeBackGround" autoPlay muted loop>
            <source src={BackGroundVideo} type="video/mp4"></source>
          </video>
        </div>
      {/* 추천 */}
      <div className="RecWeathers">
        {RecWeathers.map((weather) => {
          if(this.state.weatherNow === weather.id ) {
            return (
            <Recommends 
            key={weather.id}
            introTitle={weather.introTitle}
            title={weather.title}
            place={weather.place}
            text={weather.text}
            />)
          } else {
            return '';
          }
        })}
      </div>

      <div className="RecSeasons">
        {RecSeasons.map((season) => 
        // 1년 12개월 4등분하여 계절별로 처리할 것.
        // 혹은.... 날씨 api를 통해 온도로 처리할 수도 있겠음.
          <Recommends 
          key={season.id}
          introTitle={season.introTitle}
          title={season.title}
          place={season.place}
          text={season.text}
          />
        )}
      </div>



      </>
    );
  }

}

export default Home;