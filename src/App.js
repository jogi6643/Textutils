
import Navbar from './components/Navbar'
// import About from './components/About'
import React, { useState } from 'react'
import TextForm from './components/TextForm'
function App() {
  const [mode,setDarkMOde] = useState('dark');
  const toggleMode=()=> {
    if(mode=='dark') {
      setDarkMOde('light')
      document.body.style.backgroundColor="#8000ff"
    }
    else
    {
      setDarkMOde('dark')
      document.body.style.backgroundColor="white"
    }
  }
  return (
  <>

<Navbar title="TextUtiles" about="About Us" mode={mode} toggleMode={toggleMode}/>
<div className="container">
<TextForm heading="Enter your text to analyze"/>
{/* <About/> */}
</div>
  </>
    
  );
}

export default App;
