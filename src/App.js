import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

import NasaPhoto from "./Components/NasaPhoto";


function App() {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=lpCHbE7Kw5OajQidHWhS2h5qCbRp8yHvrpzIVJCE&date=2022-03-23`)
    .then(res => {
      setData(res.data);
    })
    .catch(err => console.error(err))
  }, [])

  return (
    <div className="App">
      { data && <NasaPhoto photo={data} /> }
    </div>
  );
}

export default App;
