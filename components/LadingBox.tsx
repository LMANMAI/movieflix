import React, { useState } from "react";
import { Box } from "../styles";
interface IBoxProps {
  image: string;
  tittle: string;
  subtittle: JSX.Element | string;
}
const LadingBox = (props: IBoxProps) => {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);
  return (
    <Box
      className={` ${hovered ? "animated" : "notanimated"} `}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <h3>{props.tittle}</h3>
      <p>{props.subtittle}</p>
      <img src={props.image} alt={props.tittle} />
    </Box>
  );
};

export default LadingBox;
