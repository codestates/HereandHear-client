import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {
  const [index, setIndex] = useState()
  
  axios({
    url: 'http://ec2-18-117-235-159.us-east-2.compute.amazonaws.com'
  })
  .then(res => {
    setIndex(res.data)
  })
  return (
    <h1>{index}</h1>
  );
}

export default App;
