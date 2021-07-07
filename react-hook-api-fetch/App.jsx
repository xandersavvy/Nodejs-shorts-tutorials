// @ts-check
import React, { useState , useEffect } from "react"; //impporting react


function App() {
  let [person, setPerson] = useState(null); //state hook so we can load the person 
  useEffect(() => { //effect hook to imitate componentDidMount() 
    const  fetchData = async ()=> { //async call
      const url = 'https://api.randomuser.me/'
     const response = await fetch(url)
     const data = await response.json()
     setPerson(data.results[0]) //data setter
    }
    fetchData()
  },[]) //empty array for load once
  return !person ? <div>loading.. </div> : <div> {person.gender} </div>; //connditional update
}

export default App;
