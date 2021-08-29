
import Navbar from './components/Navbar'
import Alert from './components/Alert'
// import About from './components/About'
import React, { useState } from 'react'

import TextForm from './components/TextForm'
function App() {
  const [mode,setDarkMOde] = useState('dark');
  const [alert, setAlert] = useState('success');
  const showAlert=(message,type)=> {
    setAlert({
      msg: message,
      type: type,
    })
  }
  const toggleMode=()=> {
    if(mode=='dark') {
      setDarkMOde('light')
      document.body.style.backgroundColor="#8000ff"
      showAlert('Dark Mode has been enabled','success')
    }
    else
    {
      setDarkMOde('dark')
      document.body.style.backgroundColor="white"
      showAlert('Light Mode has been enabled','warning')
    }
  }
  return (
  <>

<Navbar title="TextUtiles" about="About Us" mode={mode} toggleMode={toggleMode}/>
<div className="container">
<Alert alert={alert} />
<TextForm showAlert ={showAlert} heading="Enter your text to analyze"/>
{/* <About/> */}
</div>
  </>
    
  );
}

export default App;
