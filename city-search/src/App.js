import React, { useState, useEffect } from "react";
import axios from 'axios'


function App() {

  const [post, setPost] = useState([])
  const [city, setCity] = useState([])
  
  const fetchPost = async () => {
  
    const response = await axios(`http://ctp-zip-api.herokuapp.com/city/${city.toUpperCase()}`)
    setPost(response.data)
    console.log(response.data)
    
  }

  useEffect(() => {
    fetchPost()
  }, [])

  return (
    <div className="zip-search">
      <h1>Hello world</h1>
      <div>
        <input type = "text" value = {city}  onChange = {e => setCity(e.target.value)}/>
        <button onClick={fetchPost}>Search new city</button>
      </div>
      <div>
        {post.map(element => {
        return(
            <div className = "City" key={element}>
            <div><br></br></div>
            <div>{element}</div>
        </div>
        
        )})}</div>
    </div>
  );

}
export default App;