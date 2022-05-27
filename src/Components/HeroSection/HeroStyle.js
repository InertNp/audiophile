import styled from "styled-components";
import imgDesk from "../Shared/Img/Desktop/image-hero.jpg";
import imgMob from "../Shared/Img/MobileS/image-header.jpg";
import imgTab from "../Shared/Img/Tablet/image-header.jpg";
import {
  black,
  grey,
  lightblack,
  orange,
  white,
} from "../Shared/Styles/Colors";
import { devices } from "../Shared/Styles/Sizes";

export const HeroContainer = styled.header`
  height: 100vh;
  width: 100%;
  background-image: url(${imgDesk});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  font-family: "roberto";

  @media ${devices.tablet} {
    background-image: url(${imgTab});
    background-position: top;
    background-size: cover;
  }
  @media ${devices.mobileL} {
    background-image: url(${imgMob});
    background-size: curtain;
    background-position: top;
  }
`;
export const NavbarContainer = styled.nav`
  margin-top: 0;
  width: 100%;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  height: 10vh;
`;
export const Container80 = styled.div`
  width: 80%;
  align-self: center;
  height: 100%;
  display: flex;
  border-bottom: 1px solid ${lightblack};
  align-items: center;
  justify-content: space-between;
  @media ${devices.tablet} {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }
  @media ${devices.mobileL} {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }
`;
export const Lines = styled.div`
  color: white;
  display: none;

  @media ${devices.tablet} {
    display: block;
  }
  @media ${devices.mobileL} {
    display: block;
  }
`;

export const Title = styled.div`
  color: ${white};
  line-height: 0;
  text-transform: lowercase;
  & h1 {
    font-size: 3em;
    font-family: "Square Peg", cursive;
  }
  @media ${devices.tablet} {
    /* background-color: red; */
    width: 70%;
  }
  @media ${devices.mobileL} {
    /* background-color: red; */
    width: auto;
  }
`;

export const Elements = styled.div`
  color: ${white};
  display: flex;
  flex-direction: row;
  & h2 {
    font-size: 20px;
    font-weight: 100;
    font-family: "roberto";
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 5px;
  }
  & h2:hover {
    color: ${orange};
    cursor: pointer;
  }

  @media ${devices.tablet} {
    display: none;
  }
  @media ${devices.mobileL} {
    display: none;
  }
`;

export const Cart = styled.div`
  color: ${grey};
  & #cart:hover {
    color: ${orange};
  }
`;
/// Hero section text
export const TextsContainer = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const TextSubContainer = styled.div`
  width: 80%;
  height: 90%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${devices.tablet} {
    justify-content: center;
    align-items: center;
  }
  @media ${devices.mobileL} {
    justify-content: center;
    align-items: center;
  }
`;
export const LightHeader = styled.h2`
  width: 40%;
  margin: 0;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 100;
  font-size: 15px;
  line-height: 23px;
  letter-spacing: 0.7em;
  color: ${lightblack};

  @media ${devices.tablet} {
    width: 100%;
    text-align: center;
  }
  @media ${devices.mobileL} {
    width: 100%;
    text-align: center;
  }
`;
export const Header = styled.h1`
  margin-top: 0;
  margin-bottom: 10px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 50px;
  letter-spacing: 0.05em;
  width: 20%;
  @media ${devices.tablet} {
    width: 50%;
    text-align: center;
  }
  @media ${devices.mobileL} {
    width: 100%;
    text-align: center;
  }
`;

export const Paragraph = styled.p`
  width: 30%;
  margin-top: 10px;
  margin-bottom: 20px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 29px;
  letter-spacing: 0.01em;
  color: ${grey};

  @media ${devices.tablet} {
    width: 40%;
    text-align: center;
  }
  @media ${devices.mobileL} {
    width: 100%;
    text-align: center;
  } ;
`;

//Side bar

export const SidePop = styled.div`
  display: none;

  @media ${devices.tablet} {
    width: 100%;
    align-items: center;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  @media ${devices.mobileL} {
    width: 100%;
    align-items: center;
    height: 100%;
    display: flex;
    flex-direction: column;
  } ;
`;

export const SideButton = styled.button`
  background-color: transparent;
  color: ${white};
  text-align: center;
  width: 100%;
  margin: 20px;
  height: 10%;
  font-size: 40px;
  border: none;
  & :hover,
  :focus {
    background-color: white;
    color: ${black};
  }
`;
