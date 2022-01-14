import React from "react";
import { Box } from "../styles";

interface IBoxProps {
  image: string;
  tittle: string;
  subtittle: JSX.Element | string;
}
const LadingBox = (props: IBoxProps) => {
  return (
    <Box>
      <h3>{props.tittle}</h3>
      <p>{props.subtittle}</p>

      <img src={props.image} alt={props.tittle} />
    </Box>
  );
};

export default LadingBox;
