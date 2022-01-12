import React, { useEffect, useState } from "react";
import axios from 'axios'


function App() {

  const [posts, setPosts] = useState([])
  const zipCode = 10314

  // call API
  const fetchPost = async () => {
  
    const response = await axios("http://ctp-zip-api.herokuapp.com/zip/" + zipCode)
    //const response = await axios("https://api.chucknorris.io/jokes/random")
    console.log(response.data)
    setPosts(response.data)
  
  }

  useEffect(() => {
    fetchPost()
  }, [])

  return (
    <div className="zip-search">
      <h1>Hello world</h1>
      <div>
        {posts.map(element => {
        return(<div className = "City" key={element.RecordNumber}>
            <div>{element.City}</div>
            <div>State: {element.State}</div>
            <div>Location: {element.Location}</div>
            <div>Population: {element.EstimatedPopulation}</div>
            <div>Total Wages: {element.TotalWages}</div>
            <div></div>

        </div>
        
        )})}</div>
      <button onClick={fetchPost}>Search new city</button>
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