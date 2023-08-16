import MyContextProvider from "./components/MyContext";
import Navbar from "./components/Navbar";
import React from 'react'
import Profile from "./components/Profile";

//creating a new context using create context function 


function App() {
  return (
    <MyContextProvider>
      <Navbar />
      <Profile/>
    </MyContextProvider>
  );
}

export default App; 