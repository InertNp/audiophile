import { HeroContainer } from "./HeroStyle";
import { Navbar } from "./Navbar/Navbar";
import { TextContainer } from "./TextContainer/TextContainer";
import { Sidebar } from "./Sidebar/Sidebar";
import { useState } from "react";
export const HeroSection = () => {
  const [side, setSide] = useState(false);
  const handleClick = () => {
    if (side === false) {
      setSide(true);
    } else {
      setSide(false);
    }
  };
  return (
    <HeroContainer>
      <Navbar clicked={handleClick} />
      {side === false ? <TextContainer /> : <Sidebar />}
    </HeroContainer>
  );
};
