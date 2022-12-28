import { useState } from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Name from './Components/Name'
import Dashboard from './Components/Dashboard'
import './Styles/App.css'

function App() {
  
  const [dashboard , setDashboard] = useState(false)
  const [name, setName]= useState("")

  //function on change of the input form
  function handleChange(){
      setName( event.target.value)
  }

  return (
    <div className="App">
      <Navbar />
      { !dashboard && <Name changed ={handleChange} dashboard={()=>{setDashboard( dashboard => !dashboard)}}/>}
      { dashboard && <Dashboard  name={name} />}
    <Footer />
    </div>
  )
}

export default App
