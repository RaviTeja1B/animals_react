import AnimalShow from "./AnimalShow";
import { useState } from "react";
import  './App.css';
function getRandomAnimals(){
    const animals=['birds','cat','cow','dog','gator','horse'];
    return animals[Math.floor(Math.random() * (animals.length ))] 
}

// console.log(getRandomAnimals())
const App = () => {
    const [animals,setAnimals]=useState([]);
    const handleClick= ()=>{
      setAnimals([...animals,getRandomAnimals()])
    }
    const renderedAnimals=animals.map((animal2,index)=>{
        return <AnimalShow type={animal2} key = {index}/>
    })
  return (
    <div className="app">
        <button onClick={handleClick}>AddAnimal</button>
        <p className="animal-list"> {renderedAnimals}</p>
    </div>
  )
}
export default App