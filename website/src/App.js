import MyContextProvider from "./components/MyContext";
import Navbar from "./components/Navbar";
import React from 'react'
import Profile from "./components/Profile";
import Services from "./components/Services";

//creating a new context using create context function 


function App() {
  return (
    <MyContextProvider>
      <Navbar />
      <Profile/>
      <Services/>
    </MyContextProvider>
  );
}

export default App; 