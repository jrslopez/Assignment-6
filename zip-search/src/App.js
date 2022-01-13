import React, { useState, useEffect } from "react";
import axios from 'axios'


function App() {

  const [post, setPost] = useState([])
  const [zip, setZip] = useState([])
  

  const fetchPost = async () => {
  
    const response = await axios(`http://ctp-zip-api.herokuapp.com/zip/${zip}`)
    setPost(response.data)
    console.log(response.data)
    
  }
  

  useEffect(() => {
    fetchPost()
  }, [])

  return (
    <div className="zip-search">
      <h1>Zip Code Search</h1>
      <div>
        <input type = "text" value = {zip} onChange = {e => setZip(e.target.value)}/>
        <button onClick={fetchPost}>Search Zip Code</button>
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

}

export default App;