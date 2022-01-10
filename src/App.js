import React, { useEffect, useState } from "react";
import axios from 'axios'


function App() {

  const [posts, setPosts] = useState([])

  // call API
  const fetchPost = async () => {

    /*
    const response = await axios("http://ctp-zip-api.herokuapp.com/zip/10010")
    console.log(response.data)
    setPosts(response.data)
    */

    fetch("http://ctp-zip-api.herokuapp.com/zip/10010")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          setPosts(result)
        }
      )
  }

  useEffect(() => {
    fetchPost()
  }, [])

  return (
    <div className="App">
      <h1>Hello world</h1>
      <p>{posts.map(element => {
        console.log(element.City)
      })}</p>
      <button onClick={fetchPost}>Click to get a new joke</button>
    </div>
  );
}

export default App;