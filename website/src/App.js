
import Navbar from "./components/Navbar";
import React, { useRef, useState } from 'react'
import Profile from "./components/Profile";
import Services from "./components/Services";
import Projects from "./components/projects";
import Proficencies from "./components/Proficencies";

//creating a new context using create context function 


function App() {
  const [count,setCount]= useState(true)
  const [currentlyActive,setCurrentlyActive]=useState({"Profile":true,"Project":false,"Proficencies":false,"Services":false})
  const scroll=(ref)=>{ 
    setCurrentlyActive(prevState => {
      let updatedState = { ...prevState }; 
  
      Object.keys(updatedState).forEach(item => {
        updatedState[item] = (ref === item); 
      });
    
      return updatedState;
    });
    
    }
  return (
    
   <>
      <Navbar  scroll={scroll} />
    <div  style={{display:currentlyActive["Profile"]?"block":"none"}}>
      <Profile />
    </div>
    <div  style={{display:currentlyActive["Services"]?"block":"none"}}>
      <Services />
    </div>
    <div  style={{display:currentlyActive["Proficencies"]?"block":"none"}}>
    <Proficencies/>
    </div>
    <div style={{display:currentlyActive["Project"]?"block":"none"}}>
      <Projects/>
    </div>
    </>
  );
}

export default App; 