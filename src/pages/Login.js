import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import background from "../assets/login.jpg";
import { useNavigate } from "react-router-dom";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";
// import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
// import { firebaseAuth } from "../utils/firebase-config";
import axios from "axios";
import './Login.css'

function Login() {
  const url = "https://aman-netflix.onrender.com/login"
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError] = useState("")
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError("")
    const res = await axios.post(url,{email,password})
    console.log(res.data)
    if(res.data === 'email')
    {
      setError("You are not signed in")
    }
    if(res.data === "sucess")
    {
      console.log("amanuel111")
      setError("");
      console.log("amanuel")
      localStorage.setItem('email', email);
      console.log(localStorage.getItem("email"))
      navigate("/");
    }
    if(res.data === "password")
    {
      setError("You didn't insert the correct password.")
    }
    if(res.data == "verify")
    {
      setError("You have to verify your email.")
    }
    // try {
    //   await signInWithEmailAndPassword(firebaseAuth, email, password);
    // } catch (error) {
    //   console.log(error.code);
    // }
  };
  // onAuthStateChanged(firebaseAuth, (currentUser) => {
  //   if (currentUser) navigate("/");
  // });

  return (
    <Container>
      <BackgroundImage />
      <div className="content">
        <Header />
        <div className="form-container flex column a-center j-center">
          <div className="form flex column a-center j-center">
            <div className="title">
              <h2 className = "text-red">{error}</h2>
              <h3>Login</h3>
            </div>
            <div className="container flex column">
              <input
                type="text"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <button onClick={handleLogin}>Login</button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.5);
    grid-template-rows: 15vh 85vh;
    .form-container {
      gap: 2rem;
      height: 85vh;
      .form {
        padding: 2rem;
        background-color: #000000;
        width: 40vw;
        gap: 2rem;
        color: white;
        .container {
          gap: 2rem;
          input {
            padding: 0.5rem 1rem;
            width: 15rem;
          }
          button {
            padding: 0.5rem 1rem;
            background-color: #e50914;
            border: none;
            cursor: pointer;
            color: white;
            border-radius: 0.2rem;
            font-weight: bolder;
            font-size: 1.05rem;
          }
        }
      }
    }
  }
`;

export default Login;
