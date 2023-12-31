import React from "react";
import Box from "@mui/material/Box";
import Post from "./Post";
import {data} from "../data";

const arr = [1, 2, 3, 4, 5, 6];

const Feed = () => {
  return (
    <Box flex={3}>
      {data.map((data) => (
       
        <Post key={data.title} data={data} />
      ))}
    </Box>
  );
};

export default Feed;
