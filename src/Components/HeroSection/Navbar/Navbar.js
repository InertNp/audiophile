import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Cart,
  Container80,
  Elements,
  NavbarContainer,
  Title,
  Lines,
} from "../HeroStyle";
import {
  faCartShopping,
  faBars,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export const Navbar = ({clicked}) => {
  const [icon , setIcon] = useState(faBars)
  const handleClick = () => {
    clicked();
    if(icon === faBars){
      setIcon(faClose)
    }
    else{
      setIcon(faBars)
    }

  }
  return (
    <NavbarContainer>
      <Container80>
        <Lines>
          <FontAwesomeIcon icon={icon} size="2x" onClick={handleClick} />
        </Lines>
        <Title>
          <h1>Audiophile</h1>
        </Title>
        <Elements>
          <h2>Home</h2>
          <h2>Headphones</h2>
          <h2>Speakers</h2>
          <h2>Earphones</h2>
        </Elements>
        <Cart>
          <FontAwesomeIcon icon={faCartShopping} size="2x" id="cart" />
        </Cart>
      </Container80>
    </NavbarContainer>
  );
};
