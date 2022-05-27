import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { orange } from "../../Shared/Styles/Colors";
import { ItemContainer, Image } from "../Liststyle";

export const Items = ({data}) => {
    console.log(data.img)
  return (
    <ItemContainer>
      <Image src={require(`../../Shared/Img/Shared/${data.img}`)} />
      <div className="Text">
          <p className="name">{data.name}</p>
        <p className="shop">
          Shop <FontAwesomeIcon icon={faChevronRight} className="icon" color={orange}/>
        </p>
      </div>
    </ItemContainer>
  );
};
