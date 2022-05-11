import { useState } from "react";
import { HeaderMenuList } from "../../mocks/HeaderMenuList";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import styled from "styled-components";

const Navbar = ({ navBgColor }) => {
  const [showMenu, setShowMenu] = useState(false);

  const showMenuHandler = () => {
    setShowMenu((prevState) => !prevState);
  };

  return (
    <Nav navBgColor={navBgColor}>
      <Logo>
        <a href="#">
          <img src="images/logo.svg" />
        </a>
      </Logo>
      <NavList isShowMenu={showMenu}>
        <ToggleCloseButton onClick={showMenuHandler}>
          <CloseIcon />
        </ToggleCloseButton>
        {HeaderMenuList.map((link) => (
          <NavListItem key={link.id} onClick={showMenuHandler}>
            <Link href={`${link.path}`}>{link.title}</Link>
          </NavListItem>
        ))}
        {/* <NavListItem>
            <Link href="#">Portfolio</Link>
          </NavListItem>
          <NavListItem>
            <Link href="#">Product</Link>
          </NavListItem>
          <NavListItem>
            <Link href="#">Experience</Link>
          </NavListItem>
          <NavListItem>
            <Link href="#">Contact</Link>
          </NavListItem>
          <NavListItem>
            <Link href="#">Portfolio</Link>
          </NavListItem> */}
      </NavList>
      <ToggleButton onClick={showMenuHandler}>
        <MenuIcon />
      </ToggleButton>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6rem;
  font-family: "Poppins", sans-serif;
  z-index: 10;
  padding: 0 6rem;
  background-color: ${(props) =>
    props.navBgColor ? props.navBgColor : "transparent"};

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;
const Logo = styled.div`
  img {
    padding-top: 10px;
  }
`;
const NavList = styled.ul`
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  font-style: inherit;
  cursor: pointer;

  @media screen and (max-width: 992px) {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 75%;
    background-color: #fff;
    flex-direction: column;
    align-items: flex-start;
    transition: all 0.5s;
    ${(props) =>
      props.isShowMenu
        ? "transform: translateX(0%)"
        : "transform: translateX(100%)"}
  }
`;
const NavListItem = styled.li`
  margin-left: 2rem;
  position: relative;
  @media screen and (max-width: 992px) {
    margin-top: 1.5rem;
  }
`;

const Link = styled.a`
  color: #fff;
  &:after {
    content: " ";
    background: white;
    height: 2px;
    position: absolute;
    transition: 0.36s all 0.065s;
    width: 0%;
    bottom: 0;
    display: block;
  }
  &:hover {
    &::after {
      width: 100%;
    }
  }
  @media screen and (max-width: 992px) {
    color: ${(props) => props.theme.mainBlack};
  }
`;

const ToggleButton = styled.div`
  display: none;
  svg {
    font-size: 2rem;
    color: #fff;
  }

  @media screen and (max-width: 992px) {
    display: block;
  }
`;
const ToggleCloseButton = styled.div`
  padding: 1rem;
`;
