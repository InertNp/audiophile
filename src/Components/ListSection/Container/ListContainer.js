import { SubContainer } from "../Liststyle";
import { Items } from "./Items";

export const ListContainer = () => {
  const data = [
    {
      id: 1,
      name: "headphones",
      img: "image-headphones.png",
    },
    {
      id: 2,
      name: "speaker",
      img: "image-speakers.png",
    },
    {
      id: 3,
      name: "earphones",
      img: "image-earphones.png",
    },
  ];

  return (
    <SubContainer>
      {data.map((e) => {
        return <Items  data={e} key={e.id}/>;
      })}
    </SubContainer>
  );
};
