import MyContextProvider from "./components/MyContext";
import Navbar from "./components/Navbar";
import React, { useRef } from 'react'
import Profile from "./components/Profile";
import Services from "./components/Services";
import Projects from "./components/projects";

//creating a new context using create context function 


function App() {
  const proRef=useRef(null)
  const serRef=useRef(null)
  const jectRef=useRef(null)
  const scroll=(ref)=>{ 
    console.log(ref);
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  return (
    <MyContextProvider>
      <Navbar  scroll={scroll} re={[proRef,serRef,jectRef]}/>
    <div ref={proRef}>
      <Profile />
    </div>
    <div ref={serRef}>
      <Services />
    </div>
    <div ref={jectRef}>
    <Projects/>
    </div>
    </MyContextProvider>
  );
}

export default App; 