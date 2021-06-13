// RecSeasons.js와 RecWeather.js를 DummyDatas.js로 통합하였음.
const DummyDatas = [
  {
    id: 1,
    weather: "Clear",
    theme: "Place",
    month: 5,
    weatherTitle: "맑은날 추천하는 여행지",
    seasonTitle: "5월에 추천하는 여행지",
    title: "교토의 철학의 길",
    place: "Kyoto, Japan",
    text: "비에이초(美栄町)의 인기 관광지인 ‘시로가네 청의 호수(白金 青い池, 일본어 그대로 아오이 이케라고도 함)’는 홋카이도를 대표하는 “절경 장소”로 지금은 일본 전국 및 세계에도 그 이름을 알릴 정도로 아름답다고 합니다.",
    recImg: "/img/sapporo.jpg",
  },
  {
    id: 2,
    weather: "Thunderstorm",
    theme: "Place",
    month: 6,
    weatherTitle: "천둥번개가 칠 때는 잔잔한 하와이 어떠세요?",
    seasonTitle: "6월에 추천하는 여행지",
    title: "하와이의 따뜻한 태평양 바람",
    place: "Hawaii, USA",
    text: "호놀룰루 남부 해안에 자리한 세계적인 유명 관광지 와이키키는 한때 하와이 왕족이 즐겨 찾던 곳입니다. 하와이어로 '뿜어져 나오는 물'이라는 뜻의 와이키키는 1901년 최초의 호텔 모아나 서프라이더가 개관하며 세상에 알려졌습니다. 오늘날 와이키키는 호텔과 리조트가 밀집한 오아후의 주요 지역이자 전 세계 방문객이 모여드는 만남의 공간이 되었습니다. 칼라카우아 애비뉴를 따라가며 세계 최고의 쇼핑, 식사, 엔터테인먼튼, 액티비티 및 리조트를 돌아보세요.",
    recImg: "/img/hawaii.jpeg"
  },
  {
    id: 3,
    weather: "Drizzle",
    theme: "Nature",
    month: 7,
    weatherTitle: "이슬비 내리는 날에는 오슬로의 숲으로 떠나요",
    seasonTitle: "7월에 추천하는 여행지",
    title: "노르웨이의 탁 트인 아름다운 숲과 피오르드",
    place: "Oslo, Norway",
    text: "거센 파도가 몰아치는 대서양 해안을 거쳐 피오르 절벽과 빙하로 얼어붙은 산들을 지나면 그림책을 펼친 듯 환상적인 풍경이 펼쳐진다. 세계에서 물가는 가장 비싸지만, 사람들의 얼굴에 근심 걱정 따위는 없다. 유럽 속 유럽 같지 않은 나라, 웅장한 고대의 대자연이 숨쉬는 노르웨이로 여행을 떠나보아요.",
    recImg: "/img/norway.jpg"
  },
  {
    id: 4,
    weather: "Rain",
    theme: "Place",
    month: 8,
    weatherTitle: "비오는 날에는 따뜻한 벽난로가 있는 별장에!",
    seasonTitle: "8월에 추천하는 여행지",
    title: "산 중 별장에서 벽난로의 따스한 온기를 느껴보세요",
    place: "Villa, Nowhere",
    text: "텍스트 미정",
    recImg: "/img/firewall.jpeg"
  },
  {
    id: 5,
    weather: "Snow",
    theme: "Nature",
    month: 9,
    weatherTitle: "이렇게 눈이 오는 날에는 로키산맥 여행 어떨까요?",
    seasonTitle: "9월에 추천하는 여행지",
    title: "캐나다가 가진 천혜의 자연 경관",
    place: "RockyVally, Canada",
    text: "사계절 내내 겨울인 얼음 평원 컬럼비아 대빙원(Columbia Icefield Explorer)은 해발 3,750m의 컬럼비아산에서 흘러내린 빙하로 뒤덮인 신비한 곳이다. 북반구에서 북극 다음으로 규모가 크며 깊이는 무려 300m. 바퀴 하나가 성인 키보다 큰 특수 차량(Ice Explorer) 투어를 통해 대빙원의 중앙으로 들어갈 수 있다.",
    recImg: "/img/rockyvally.jpeg"
  },
  {
    id: 6,
    weather: "Mist",
    theme: "place",
    month: 10,
    weatherTitle: "안개낀 날에는 고즈넉한 할슈타트 호수에서 멍때리기 어때요?",
    seasonTitle: "10월에 추천하는 여행지",
    title: "오스트리아의 '숨은진주'를 찾아 떠나보자",
    place: "Hallstatt, Austria",
    text: "1997년 유네스코 세계문화유산에 오른 할슈타트(Hallstatt). 아름다운 할슈타트 호수와 고도 3000m에 달하는 다흐슈타인 산(Dachstein), 호숫가에 위치한 그림 같은 집들을 둘러보면 마을 전체가 세계문화유산인 이유를 알 수 있습니다. 수백년 동안 사람과 물자를 실어나르던 배, 플래텐(Plätten)를 타고 할슈타트 호를 지나보세요!",
    recImg: "/img/hallstatt.jpeg"
  },
  {
    id: 7,
    weather: "Clouds",
    theme: "City",
    month: 11,
    weatherTitle: "구름낀 날에는 영국으로 떠나볼까요?",
    seasonTitle: "11월에 추천하는 여행지",
    title: "런던, 흐린 구름과 역사의 도시",
    place: "London, UK",
    text: "런던은 세계 어느 도시와도 경쟁할 만한 장엄한 역사를 가지고 있지만, 혁신의 최첨단에 서 있기도 해요. 박물관에 빠져들거나, 최고의 공연 예술을 관람하거나, 클럽과 펍을 방문하거나, 그저 역사의 위대한 발자취를 따라 걸어 다녀도 좋을 거예요. 쇼핑을 원한다면 시장이나 몰에서 무엇이든 구입할 수 있고, 강을 따라 깜짝 이벤트들이 계절마다 펼쳐져요.",
    recImg: "/img/london.jpg"
  },
  {
    id: 8,
    weather: "Haze",
    theme: "Memory",
    month: 12,
    weatherTitle: "오늘같이 예측할 수 없는 날씨라면??",
    seasonTitle: "12월에 추천하는 여행지",
    title: "이런 날에는 그냥 조용히 한바퀴 도는 도쿄 지하철 어때요?",
    place: "Tokyo, Japan",
    text: "덜컹덜컹 - 텍스트 미정",
    recImg: "/img/tokyo_subway.jpg"
  }
]


export default DummyDatas;