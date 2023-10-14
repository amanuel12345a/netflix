import React from "react";
import styled from "styled-components";
import background from "../assets/login.jpg";

export default function BackgroundImage() {
  return (
    <Container>
      <img src='https://s3-us-west-2.amazonaws.com/techvibes/wp-content/uploads/2017/04/24135159/Netflix-Background.jpg' alt="background" />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  img {
    height: 100vh;
    width: 100vw;
  }
`;