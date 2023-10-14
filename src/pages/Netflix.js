import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
// import backgroundImage from "../assets/home.jpg";
// import MovieLogo from "../assets/homeTitle.webp";
import './Netflix.css'
// import { onAuthStateChanged } from "firebase/auth";
// import { firebaseAuth } from "../utils/firebase-config";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addVideo, fetchMovies, getGenres } from "../store";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import Slider from "../components/Slider";
import axios from "axios";
import movieTrailer from "movie-trailer";
function Netflix() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [movie,setMovie] = useState([])
  const movies = useSelector((state) => state.netflix.movies);
  const genres = useSelector((state) => state.netflix.genres);
  const genresLoaded = useSelector((state) => state.netflix.genresLoaded);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const youtubeVideo = async() =>{
    movieTrailer(movie?.title|| movie?.name|| movie?.orginal_name).then((url)=>{
      const urlParams = new URLSearchParams(new URL(url).search)
      dispatch(addVideo(urlParams.get('v')))
    }).catch((err)=>console.log(err))
  //   console.log(movie.id)
  //   const data = await axios.get(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=67b77b0d2032c6b72aa04114e9e71456&append_to_response=videos`)
    
  //   console.log(data.data)
  // let video = data?.data?.videos?.results?.filter((item)=> item.name.match(/Official Trailer/) )[0]
  // console.log(video)
  // dispatch(addVideo(video.key))
  }


  useEffect(() => {
    dispatch(getGenres());
  }, []);
  useEffect(()=>{
    async function aman (){
        let a = await axios.get(`https://api.themoviedb.org/3//discover/tv?api_key=67b77b0d2032c6b72aa04114e9e71456&with_networks=213`)
        let b = a?.data?.results
        setMovie(b[Math.floor(b.length * Math.random())])
    }
    aman()
},[])
  useEffect(() => {
    if (genresLoaded) {
      dispatch(fetchMovies({ genres, type: "all" }));
    }
  }, [genresLoaded]);

  const [email,setEmail] = useState(undefined)
  // useEffect(()=>{
  //  setEmail(localStorage.getItem('email')) 
  //  if(email == null)
  //  {
  //    navigate("/login")
  //  }
  // },email)

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
let banner = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
  return (
    <Container>
      <Navbar isScrolled={isScrolled} />
      <div className="hero">
        <img
          src={banner}
          alt="background"
          className="background-image"
        />
        <div className="container">
          <div className="logo">
            {/* <img src={banner} alt="Movie Logo" /> */}
            <h1 className='banner__title'>
            {movie.name}
            </h1>
          </div>
          <div className="buttons flex">
            <button
              // onClick={() => {
              //   youtubeVideo()
              //   navigate("/player")}}
              className="flex j-center a-center"
            >
              <FaPlay />
              Play
            </button>
            <button className="flex j-center a-center">
              <AiOutlineInfoCircle />
              More Info
            </button>
          </div>
          <h1 className='banner__description'>
            {movie.overview?.length > 150 ? movie.overview.substring(0,150) : movie.overview}
            </h1>
        </div>
      </div>
      <Slider movies={movies} />
    </Container>
  );
}

const Container = styled.div`
  background-color: black;
  .hero {
    position: relative;
    height: 100%;
    .background-image {
      filter: brightness(60%);
    }
    // img {
    //   height: 100vh;
    //   width: 100vw;
    // }
    .container {
      position: absolute;
      bottom: 5rem;
      .logo {
      }
      .buttons {
        margin: 3rem 5rem 2rem;
        gap: 2rem;
        button {
          font-size: 1.4rem;
          gap: 1rem;
          border-radius: 0.2rem;
          padding: 0.5rem;
          padding-left: 2rem;
          padding-right: 2.4rem;
          border: none;
          cursor: pointer;
          transition: 0.2s ease-in-out;
          &:hover {
            opacity: 0.8;
          }
          &:nth-of-type(2) {
            background-color: rgba(109, 109, 110, 0.7);
            color: white;
            svg {
              font-size: 1.8rem;
            }
          }
        }
      }
    }
  }
`;
export default Netflix;
