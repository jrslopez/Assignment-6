import React, { useState, useEffect } from "react";
import axios from 'axios'


function App() {

  const [post, setPost] = useState([])
  const [zip, setZip] = useState([])

  // call API
  const fetchPost = async () => {
  
    const response = await axios(`http://ctp-zip-api.herokuapp.com/zip/${zip}`)
    setPost(response.data)
  
  }

  useEffect(() => {
    fetchPost()
  }, [])

  return (
    <div className="zip-search">
      <h1>Hello world</h1>
      <div>
        <input type = "text" value = {zip} onChange = {e => setZip(e.target.value)}/>
        <button onClick={fetchPost}>Search new city</button>
      </div>
      <div>
        {post.map(element => {
        return(
            <div className = "City" key={element.RecordNumber}>
            <div><br></br></div>
            <div>{element.City}</div>
            <div>State: {element.State}</div>
            <div>Location: {element.Location}</div>
            <div>Population: {element.EstimatedPopulation}</div>
            <div>Total Wages: {element.TotalWages}</div>
        </div>
        
        )})}</div>
    </div>
  );

  /*return (
    <div className="App">
      <h1>Hello world</h1>
      <p>{posts.value}</p>
      <button onClick={fetchPost}>Click to get a new joke</button>
    </div>
  );*/
}

export default App;