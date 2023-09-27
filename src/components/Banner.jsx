import React,{useState, useEffect} from 'react'
import './Banner.css';
import tmdbAxiosInstance from '../tmdbAxiosInstance';

function Banner({fetchUrl}) {
    const base_url = "https://image.tmdb.org/t/p/original/";
    console.log(fetchUrl);
    const[movie,setMovie]=useState({})
    const fetchData = async () => {
      const {data} = await tmdbAxiosInstance.get(fetchUrl);
    //   setAllMovies(data.results)
    setMovie(data.results[Math.floor(Math.random()*data.results.length)]);
    };
    // console.log(movie);
    useEffect(() => {
      fetchData();
    }, []);
  return (
    
        <div className='banner' style={{height:'600px',backgroundSize:'cover',backgroundImage:`url(${base_url}/${movie?.backdrop_path})`,backgroundAttachment:'fixed'}}>
            <div className='banner-content'>
                <h1>{movie?.name}</h1>
                <h2> {movie?.overview?.slice(0,300)}...</h2>
            </div>
        </div>
    
  )
}

export default Banner