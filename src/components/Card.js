import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoPlayCircleSharp } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";
import { BsCheck } from "react-icons/bs";
import axios from "axios";
import { useDispatch } from "react-redux";
import { removeMovieFromLiked ,removeFromLiked,addToLiked, addVideo } from "../store";
import movieTrailer from 'movie-trailer' 

// import video from "../assets/video.mp4";

export default React.memo(function Card({ index, movieData, isLiked = false }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false);
  const [email, setEmail] = useState(undefined);
  const url = "https://aman-netflix.onrender.com/api/user/add"

  // onAuthStateChanged(firebaseAuth, (currentUser) => {
  //   if (currentUser) {
  //     setEmail(currentUser.email);
  //   } else navigate("/login");
  // });
  useEffect(()=>{
   setEmail(localStorage.getItem('email')) 
   if(localStorage.getItem('email') == null)
   {
     navigate("/login")
   }
  },[])
 const youtubeVideo = async () =>{
  // movieTrailer(movieData?.title|| movieData?.name|| movieData?.orginal_name).then((url)=>{
  //   const urlParams = new URLSearchParams(new URL(url).search)
  //   dispatch(addVideo(urlParams.get('v')))
  // }).catch((err)=>console.log(err))
  const data = await axios.get(`https://api.themoviedb.org/3/movie/${movieData.id}?api_key=67b77b0d2032c6b72aa04114e9e71456&append_to_response=videos`)
  let video = data?.data?.videos?.results?.filter((item)=> item.name.match(/Official Trailer/) )[0]
  dispatch(addVideo(video.key))
  // === "Official Trailer"
  console.log(video.key)
 }
  const addToList = async () => {
    try {
      await axios.post(url, {
        email,
        data: movieData,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movieData.image}`}
        alt="card"
        // onClick={() =>  {
        //   youtubeVideo()
        //   navigate("/player")}}
      />

      {isHovered && (
        <div className="hover">
          <div className="image-video-container">
            <img
              src={`https://image.tmdb.org/t/p/w500${movieData.image}`}
              alt="card"
              // onClick={() => {
              //   youtubeVideo()
              //   navigate("/player")}}
            />
            {/* <video
              src={video}
              autoPlay={true}
              loop
              muted
              onClick={() => navigate("/player")} */}
            {/* /> */}
          </div>
          <div className="info-container flex column">
            <h3 className="name" 
            // onClick={() => {
            //   youtubeVideo()
            //   navigate("/player")}}
              >
              {movieData.name}
            </h3>
            <div className="icons flex j-between">
              <div className="controls flex">
                <IoPlayCircleSharp
                  title="Play"
                  // onClick={() => 
                  //   { youtubeVideo()
                  //     navigate("/player")}}
                />
                <RiThumbUpFill title="Like" />
                <RiThumbDownFill title="Dislike" />
                {isLiked ? (
                  <BsCheck
                    title="Remove from List"
                    onClick={() =>
                      dispatch(
                        removeMovieFromLiked({ movieId: movieData.id, email })
                      )
                    }
                  />
                ) : (
                  <AiOutlinePlus title="Add to my list" onClick={ addToList }
                  />
                )}
              </div>
              <div className="info">
                <BiChevronDown title="More Info" />
              </div>
            </div>
            <div className="genres flex">
              <ul className="flex">
                {movieData.genres.map((genre,index) => (
                  <li key={index}>{genre}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
});

const Container = styled.div`
  max-width: 230px;
  width: 230px;
  height: 100%;
  cursor: pointer;
  position: relative;
  img {
    border-radius: 0.2rem;
    width: 100%;
    height: 100%;
    z-index: 10;
  }
  .hover {
    z-index: 9999;
    height: max-content;
    width: 20rem;
    position: absolute;
    top: -18vh;
    left: 0;
    border-radius: 0.3rem;
    box-shadow: rgba(0, 0, 0, 0.75) 0px 3px 10px;
    background-color: #181818;
    transition: 0.3s ease-in-out;
    .image-video-container {
      position: relative;
      height: 140px;
      img {
        width: 100%;
        height: 140px;
        object-fit: cover;
        border-radius: 0.3rem;
        top: 0;
        z-index: 4;
        position: absolute;
      }
      
    }
    .info-container {
      padding: 1rem;
      gap: 0.5rem;
    }
    .icons {
      .controls {
        display: flex;
        gap: 1rem;
      }
      svg {
        font-size: 2rem;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #b8b8b8;
        }
      }
    }
    .genres {
      ul {
        gap: 1rem;
        li {
          padding-right: 0.7rem;
          &:first-of-type {
            list-style-type: none;
          }
        }
      }
    }
  }
`;