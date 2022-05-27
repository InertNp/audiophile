import { PrimaryButton } from "../../Shared/Styles/Buttons";
import {
  TextsContainer,
  TextSubContainer,
  LightHeader,
  Header,
  Paragraph,
} from "../HeroStyle";


export const TextContainer = () => {
  return (
    <TextsContainer>
      <TextSubContainer>
        <LightHeader>NEW PRODUCT</LightHeader>
        <Header>
          XX99 MARK II 
          HEADPHONES
        </Header>
        <Paragraph>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </Paragraph>
        <PrimaryButton>See Product</PrimaryButton>
      </TextSubContainer>
    </TextsContainer>
  );
};

