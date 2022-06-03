import styled from "styled-components";
import { black, grey, orange, white } from "../Shared/Styles/Colors";
import patternSample from "../Shared/Img/Desktop/pattern-circles.svg";
import { devices } from "../Shared/Styles/Sizes";
import zx7speaker from "../Shared/Img/Desktop/image-speaker-zx7.jpg";
import zx7speakermob from "../Shared/Img/MobileS/image-speaker-zx7.jpg";
import zx7speakertab from "../Shared/Img/Tablet/image-speaker-zx7.jpg";
export const Container1 = styled.div`
  margin-top: 0;
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
  @media ${devices.tablet} {
    width: 100%;
  }
  @media ${devices.mobileL} {
    width: 100%;
  }
`;
export const SubContainer1 = styled.div`
  width: 80%;
  background-color: ${orange};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-image: url(${patternSample});
  background-position: left;
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 10px;

  @media ${devices.tablet} {
    width: 80%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
  }
  @media ${devices.mobileL} {
    width: 80%;
    flex-direction: column;
  }
`;
export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  /* background-color: red; */
  width: 50%;
  @media ${devices.tablet} {
    width: 100%;
  }
  @media ${devices.mobileL} {
    width: 100%;
  }
`;
export const TextContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media ${devices.tablet} {
    width: 100%;
    text-align: center;
    align-items: center;
  }
  @media ${devices.mobileL} {
    width: 100%;
    text-align: center;
    align-items: center;
  }
`;
export const P1 = styled.p`
  margin-top: 0;
  margin-bottom: 10px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 50px;
  letter-spacing: 0.05em;
  width: 20%;
  color: ${white};
  @media ${devices.tablet} {
    width: 100%;
    flex-direction: column;
    justify-content: center;
  }
  @media ${devices.mobileL} {
    width: 100%;
    flex-direction: column;
    justify-content: center;
  }
`;
export const P2 = styled.p`
  width: 70%;
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
    width: 100%;
  }
  @media ${devices.mobileL} {
    width: 100%;
  }
`;
export const ImgZx9 = styled.img`
  height: 500px;
  width: 500px;

  position: absolute;
  margin-bottom: -160px;
  @media ${devices.tablet} {
    height: 300px;
    width: 300px;
    position: unset;
    margin-bottom: 0;
    width: 100%;
  }
  @media ${devices.mobileL} {
    height: 300px;
    width: 300px;
    position: unset;
    margin-bottom: 0;
    width: 100%;
  }
`;

//zx7 headphone
export const Container2 = styled.div`
  margin-top: 0;
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
  @media ${devices.tablet} {
    width: 100%;
  }
  @media ${devices.mobileL} {
    width: 100%;
  }
`;
export const SubContainer2 = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-image: url(${zx7speaker});
  background-size: cover;
  border-radius: 10px;

  @media ${devices.tablet} {
    width: 80%;
    height: 100%;
    flex-direction: column;
    justify-content: flex-start;
    background-image: url(${zx7speakertab});
  }
  @media ${devices.mobileL} {
    width: 80%;
    flex-direction: column;
    background-image: url(${zx7speakermob});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;
export const TextContainer2 = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  @media ${devices.tablet} {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 100%;
  }
  @media ${devices.mobileL} {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 100%;
  }
`;
export const Zx7Heading = styled.p`
  margin-top: 0;
  margin-bottom: 10px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 50px;
  width: 100%;
  color: ${black};
  @media ${devices.tablet} {
    width: 100%;
    flex-direction: column;
    justify-content: center;
  }
  @media ${devices.mobileL} {
    width: 100%;
    flex-direction: column;
    justify-content: center;
  }
`;
