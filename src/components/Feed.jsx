import React from "react";
import Box from "@mui/material/Box";
import Post from "./Post";

const arr = [1,2,3,4,5,6]

const Feed = () => {
  return (
    <Box flex={4} p={2} >
        {arr.map((_,i)=>(
            <Post key={i} />
        ))}
       
     
    </Box>
  );
};

export default Feed;
