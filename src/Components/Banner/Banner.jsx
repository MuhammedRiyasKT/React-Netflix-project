import React, { useEffect, useState } from 'react'
import "./Banner.css"
import axios from '../../Axios'
import { API_KEY, imageUrl } from '../../Constants/Constant'

function Banner() {
  const [movie, setMovie] = useState(""); // Initially, movie is an empty string

  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((res) => {
        console.log(res.data.results[0]);
        const randomIndex = Math.floor(Math.random() * res.data.results.length);
        setMovie(res.data.results[randomIndex]);
      })
      .catch((error) => {
        console.error("Error fetching banner movie:", error);
      });
  }, []);

  // Truncate the text safely
  function truncateToThreeLines(text, maxLength = 150) {
    return text && text.length > maxLength 
      ? text.substring(0, maxLength) + "..." 
      : text || ""; // Return an empty string if text is undefined
  }

  return (
    <div style={{ backgroundImage: `url(${imageUrl + (movie?.backdrop_path || '')})` }} className='banner'>
      <div className='content'>
        <h1 className='header'>{movie?.name || movie?.title || "Loading..."}</h1>
        <div className='banner-buttons'>
          <button className='button'>Play</button>
          <button className='button'>My List</button>
        </div>
        <h1 className="description">{truncateToThreeLines(movie?.overview)}</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;
