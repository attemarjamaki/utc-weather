import React from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import CloudIcon from "@mui/icons-material/Cloud";
import GrainIcon from "@mui/icons-material/Grain";

function Home() {
  return (
    <>
      <Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          marginTop={"200px"}
          marginBottom={"100px"}
        >
          <Box display={"flex"}>
            <Typography variant="h1">UTC Weather </Typography>
          </Box>
        </Box>

        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <WbSunnyIcon sx={{ fontSize: "100px" }}></WbSunnyIcon>
          <AcUnitIcon sx={{ fontSize: "100px" }}></AcUnitIcon>
          <CloudIcon sx={{ fontSize: "100px" }}></CloudIcon>
          <GrainIcon sx={{ fontSize: "100px" }}></GrainIcon>
        </Box>
      </Box>
    </>
  );
}

export default Home;
