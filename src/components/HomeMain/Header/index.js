import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { HeaderMenuList } from "../../mocks/HeaderMenuList";
import Navbar from "../Navbar";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const showMenuHandler = () => {
    setShowMenu((prevState) => !prevState);
  };

  return (
    <Container>
      <BgColorRight />
      <Navbar />
      <HeaderMain>
        <HeaderMainTitle>Get the next level developments. </HeaderMainTitle>
        <HeaderMainContent>
          Every line of code we deliver is carefully crafted by our in-house
          team of professional developers. While constantly looking for new
          horizons, challenges, and opportunities in the web development, we
          have focused our attention on these core areas:
        </HeaderMainContent>
        <HeaderMainBts>
          <Btn bgColor={"#00D285"} color={"#fff"}>
            Get a Quote
          </Btn>
          <Btn>Schedule a call</Btn>
        </HeaderMainBts>
        <HeaderMainImg src="images/intro-img.png"></HeaderMainImg>
      </HeaderMain>
    </Container>
  );
};

export default Header;

const BgColorRight = styled.div`
  position: absolute;
  right: 0%;
  top: 0%;
  width: 30%;
  height: 70vh;
  background: ${(props) => props.theme.mainGreen};
  background: rgb(0, 210, 133);
  background: linear-gradient(
    90deg,
    rgba(0, 210, 133, 1) 35%,
    rgba(1, 163, 103, 1) 60%,
    rgba(3, 129, 83, 1) 100%
  );
  @media screen and (max-width: 992px) {
    height: 85vh;
  }
`;
const Container = styled.header`
  padding: 0 3rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 70%,
    rgba(229, 229, 229, 1) 70%
  );
  @media screen and (max-width: 992px) {
    height: auto;
  }
  @media screen and (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const HeaderMain = styled.div`
  flex: 1;
  display: grid;
  max-width: 115rem;
  padding: 0 3rem;
  row-gap: 2rem;
  grid-template-columns: 3fr 2fr;
  align-content: center;
  grid-template-rows: repeat(3, 100px);
  justify-content: center;
  align-items: center;
  z-index: 1;
  font-family: "Poppins", sans-serif;

  @media screen and (max-width: 992px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, auto);
    height: auto;
  }
`;
const HeaderMainTitle = styled.h1`
  color: #fff;
  font-size: 53px;
  font-weight: 700;
  width: 80%;
  @media screen and (max-width: 1192px) {
    font-size: 43px;
  }
  @media screen and (max-width: 992px) {
    font-size: 39px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    font-size: 35px;
    text-align: center;
  }
`;
const HeaderMainContent = styled.p`
  color: #fff;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.35rem;
  width: 80%;
  font-family: "Montserrat", sans-serif;
  @media screen and (max-width: 992px) {
    max-width: 70%;
  }
  @media screen and (max-width: 768px) {
    max-width: 100%;
    width: 100vw;
    padding: 0 1rem;
  }
`;
const HeaderMainBts = styled.div`
  display: flex;
  gap: 2rem;
  align-self: flex-start;
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;
const Btn = styled.button`
  border-radius: 100px;
  color: #fff;
  font-weight: 600;
  font-size: 14px;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 1em 2em;
  font-family: "Montserrat", sans-serif;
  background-color: ${(props) => (props.bgColor ? props.bgColor : "#EBFAF4")};
  color: ${(props) => (props.color ? props.color : "#000")};
  &:hover {
    background-image: linear-gradient(to right, #43e97b 0%, #01e08f 100%);
    color: #fff;
  }
`;

const HeaderMainImg = styled.img`
  width: 100%;
  justify-self: center;
  grid-column: 2 / 3;
  grid-row: 1 / span 3;
  transform: translateY(3.5rem);
  @media screen and (max-width: 192px) {
    transform: translateY(0rem);
  }
  @media screen and (max-width: 992px) {
    grid-column: 1 / -1;
    grid-row: 4;
    width: 70%;
    margin: 0 auto;
  }
`;
