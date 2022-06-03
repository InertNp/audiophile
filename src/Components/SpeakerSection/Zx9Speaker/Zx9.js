import { BlackButton } from "../../Shared/Styles/Buttons";
import {
  Container1,
  ImageContainer,
  ImgZx9,
  P1,
  P2,
  SubContainer1,
  TextContainer,
} from "../SpeakerSectionstyle";

export const Zx9 = () => {
  return (
    <Container1>
      <SubContainer1>
        <ImageContainer>
          <ImgZx9 src={require(`../../Shared/Img/Shared/image-speakers.png`)}/>
        </ImageContainer>
        <TextContainer>
          <P1>ZX9 SPEAKER</P1>
          <P2>
            Upgrade to premium speakers hat are phenomenally built to deliver
            truly remarkable sound.
          </P2>
          <BlackButton>See Product</BlackButton>
        </TextContainer>
      </SubContainer1>
    </Container1>
  );
};
