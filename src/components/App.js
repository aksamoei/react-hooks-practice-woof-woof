import React from "react";
import DogoName from "./DogoName";
import { useEffect, useState } from "react";
import DogCard from "./DogCard";

function App() {
  const [dogs, setDogs] = useState([]);
  const [oneDog, setOneDog] = useState({});
  const [isClicked, setIsClicked] = useState(false);
  const [isFiltered, setIsFiltered] = useState(false);
  const [dogfilter, setDogFilter] = useState([])

  const filterText = isFiltered ? "ON" : "OFF"

  useEffect(()=>{
    fetch("http://localhost:3001/pups")
    .then((response)=>response.json())
    .then((data)=>{setDogs(data)
      setDogFilter(data)
    })
  },[oneDog])

  const diplayDogName = dogs.map((dog)=>{
    return <DogoName name={dog.name} key={dog.id} id={dog.id} onNameClick={handleClick}/>
  })

  function handleClick(id){
    const showDog = dogs.find((dog)=>dog.id === id)
    setOneDog(showDog);
    setIsClicked(true)
  }

function handleFilter(){
  setIsFiltered((isFiltered)=>!isFiltered);
  if (!isFiltered){
  const displayFiltered = [...dogfilter].filter((dog)=>{
    return dog.isGoodDog === true;
  })
  setDogs(displayFiltered);
  }else{
  setDogs(dogfilter)
  }
}

  // console.log(oneDog);
  return (
    <div className="App">
      <div id="filter-div">
        <button id="good-dog-filter" onClick={handleFilter}>Filter good dogs: {filterText}</button>
      </div>
      <div id="dog-bar">{diplayDogName}</div>
      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div id="dog-info">{ (isClicked) ? <DogCard oneDog={oneDog} setOneDog={setOneDog}/> : ""}</div>
      </div>
    </div>
  );
}

export default App;
