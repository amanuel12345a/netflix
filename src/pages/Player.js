import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeVideo } from "../store";
import Youtube from 'react-youtube'
import { useSelector } from "react-redux";
import axios from "axios";
// import video from "../assets/video.mp4";
export default function Player() {
  const video = useSelector((state)=>state.netflix.video)
  const navigate = useNavigate();
 const dispatch = useDispatch()
 const [email,setEmail] = useState('')
 useEffect(()=>{
  setEmail(localStorage.getItem('email')) 
  if(email == null)
  {
    navigate("/login")
  }
 },email)

 console.log(email)
 const opts = {
  height: '700px',
  width: '100%',
  playerVars:{
    autoplay:1,
  }
}
// let youtube 
// const selector = async () =>{
//   console.log(video)
//   const data = await axios.get(`https://api.themoviedb.org/3/movie/${video.id}?api_key=67b77b0d2032c6b72aa04114e9e71456&append_to_response=videos`)
//    youtube = data?.data?.videos?.results?.filter((item)=> item.name.match(/Official Trailer/) )[0]
//   //  console.log(data)
//   //  console.log(youtube)
// }
// selector()
  return (
    <Container>
      <div className="player">
        <div className="back">
          <BsArrowLeft onClick={() => {
            navigate(-1)
            dispatch(removeVideo())
          }} />
        </div>
        {/* <video src={video} autoPlay loop controls muted /> */}
        {/* <Youtube id={video.key} opts={opts}/> */}
        <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${video}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />

        
      </div>
    </Container>
  );
}

const Container = styled.div`
  .player {
    width: 100vw;
    height: 100vh;
    .back {
      position: absolute;
      padding: 2rem;
      z-index: 1;
      svg {
        font-size: 3rem;
        cursor: pointer;
      }
    }
    video {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
`;
