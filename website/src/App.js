import MyContextProvider from "./components/MyContext";
import Navbar from "./components/Navbar";
import React from 'react'

//creating a new context using create context function 


function App() {
  return (
    <MyContextProvider>
      <Navbar/>
</MyContextProvider>
  );
}

export default App;