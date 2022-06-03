import styled from "styled-components";
import { HeroSection } from "./HeroSection/HeroSection";
import { List } from "./ListSection/List";
import { SpeakerSection } from "./SpeakerSection/Speaker";
const Container = styled.div`
  font-family: "roberto";
`;

export const HomeScreen = () => {
  return <Container>
      <HeroSection />
      <List/>
      <SpeakerSection/>
  </Container>;
};
