import React from "react";
import { Box } from "@mui/material";
import BodyPart from "./BodyPart";

const HorizontalScrollBar = ({ data, bodyPart, setBodyPart }) => {
  return (
    <div>
      {data.map((item, index) => {
        return (
          <Box key={index} itemID={item.id} title={item} m="0 40px">
            <BodyPart
              item={item}
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}
            />
          </Box>
        );
      })}
    </div>
  );
};

export default HorizontalScrollBar;
