import styled from "styled-components";
import { grey } from "../Shared/Styles/Colors";

export const MainContainer = styled.div`
  margin-top: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const SubContainer = styled.div`
  width: 80%;
  background-color: blue;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;
export const ItemContainer = styled.div`
  width: 32%;
  height: 300px;
  background-color: ${grey};
`;
export const Image = styled.img`
`
