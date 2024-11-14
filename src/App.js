import React from 'react'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'
import {orginals, action} from "./Url"


const App = () => {
  const orginalStyle = {width:"200px", height: '250px', borderRadius:"10px"}
  const marginTop = {marginTop:'20px'}
  return (
    <div className='App'>
       <NavBar />
       <Banner />
       <RowPost marginTop={marginTop} syles={orginalStyle} url={orginals} title='Netflix Orginals'/>
       <RowPost url={action} title='Action' isSize/>
    </div>
  )
}

export default App