import React from 'react'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'
import {orginals, action, comedy, thriller, romance, horror, drama, sciFi, fantasy, animation, adventure} from "./Url"
import Footer from './Components/Footer/Footer';



const App = () => {
  const orginalStyle = {width:"200px", height: '250px', borderRadius:"10px"}
  const marginTop = {marginTop:'20px'}
  return (
    <div className='App'>
       <NavBar />
       <Banner />
       <RowPost marginTop={marginTop} syles={orginalStyle} url={orginals} title='Netflix Orginals'/>
       <RowPost url={action} title='Action' isSize/>
       <RowPost url={comedy} title='Comedy' isSize/>
       <RowPost url={thriller} title='Thriller' isSize/>
       <RowPost url={romance} title='Romance' isSize/>
       <Footer />
    </div>
  )
}

export default App