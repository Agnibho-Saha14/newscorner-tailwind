import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Newsboard from './components/Newsboard'
function App() {
  const[category,setCategory]=useState("general");

  return (
    <>
      <Navbar setCategory={setCategory}/>
      <Newsboard category={category}/>
    </>
  );
}

export default App
