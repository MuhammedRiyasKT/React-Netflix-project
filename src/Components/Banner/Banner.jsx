import React, { useEffect, useState } from 'react'
import "./Banner.css"
import axios from '../../Axios'
import {API_KEY, imageUrl} from '../../Constants/Constant'


function Banner() {
  const [movie, setMovie] = useState("")
  console.log(movie)
  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((res)=>{
      console.log(res.data.results[0])
      const randomIndex = Math.floor(Math.random() * res.data.results.length);
      setMovie(res.data.results[randomIndex])
     }).catch((error)=>{
      console.error("Error fetching banner movie:", error);
     })
  },[])

  return (
      <div style={{backgroundImage:`url(${imageUrl+movie.backdrop_path})`}} className='banner'>
       <div className='content'>
          <h1 className='header'>{movie.name}</h1>
          <div className='banner-buttons'>
            <button className='button'>Play</button>
            <button className='button'>My List</button>
          </div>
          <h1 className='description'>{movie.overview}</h1>
       </div>
       <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner