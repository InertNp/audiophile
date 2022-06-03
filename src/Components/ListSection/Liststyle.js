import styled from "styled-components";
import { black, lightblack, orange } from "../Shared/Styles/Colors";
import greyImg from "../Shared/Img/Shared/grey-300.png";
import { devices } from "../Shared/Styles/Sizes";
export const MainContainer = styled.div`
  margin-top: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
`;
export const SubContainer = styled.div`
  width: 80%;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  @media ${devices.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media ${devices.mobileL} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const ItemContainer = styled.div`
  width: 32%;
  height: 400px;
  background-image: url(${greyImg});
  background-color: transparent;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom right;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  & .Text {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-transform: uppercase;
  }

  & .name {
    color: ${black};
    font-size: 20px;
    font-weight: 600;
    line-height: 0;
  }
  & .shop {
    color: ${lightblack};
  }
  & .shop:hover,
  :active {
    color: ${orange};
    text-decoration: underline;
    cursor: pointer;
  }
  @media ${devices.tablet} {
    width: 100%;
  }
  @media ${devices.mobileL} {
    width: 100%;
  }
`;
export const Image = styled.img`
  background-color: transparent;
  width: 250px;
  height: 250px;
`;
