import React,{useEffect, useState} from 'react'
import "./RowPost.css"
import axios from '../../Axios'
import {imageUrl,API_KEY} from '../../Constants/Constant'
import Youtube from 'react-youtube'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function RowPost(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (id) => {


    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((res)=>{
      if(res.data.results.length!==0){
        setUrlId(res.data.results[0])
      }else{
        console.log('Array is Empty')
      }
   }).catch((error)=>{
    console.log(error)
   })


    setShow(true);

  }
  const [movies, setMovies] = useState([])
  console.log(movies)
  const [urlId, setUrlId] = useState('')
  useEffect(() => {
    axios.get(props.url)
      .then((res) => {
        console.log(res.data);
        setMovies(res.data.results)
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props.url]);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    }
  }

  
  return (
    <div className='row'>
         <h5 style={props.marginTop} className='ms-2'>{props.title}</h5>
         <div className='posters'>
          {movies.map((obj)=>(
             <img style={props.syles} onClick={()=>handleShow(obj.id)} className={props.isSize?'small_poster':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="" />
          ))}
           
            
         </div>

         <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        
        <Modal.Body>
        {urlId && <Youtube opts={opts} videoId={urlId.key} />}
        </Modal.Body>
        
          <Button variant="info" onClick={handleClose}>
            Close
          </Button>
       
      </Modal>

    </div>

    
  )
}

export default RowPost