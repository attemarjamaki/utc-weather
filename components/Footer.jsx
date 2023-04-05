import React from "react";
import { Box } from "@mui/material";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";

function Footer() {
  return (
    <>
      <Box 
        backgroundColor={"rgba(255,255,255,0.5)"}
        marginTop={"auto"}
      >
        <Box
          comnponent="span"
          sx={{
            width: "100%",
            borderTop: "2px solid black",
            margin: "auto",
          }}
        ></Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          paddingBottom={10}
          width={"12%"}
          margin={"auto"}
          marginTop={5}
        >
          <Link
            href="https://openweathermap.org"
            underline="none"
            color={"black"}
            variant="h5"
            fontSize={20}
          >
            API
          </Link>
          <Divider
            sx={{ border: "1px solid black" }}
            orientation="vertical"
            flexItem
          ></Divider>
          <Link
            href="https://github.com/attemarjamaki"
            underline="none"
            color={"black"}
            variant="h5"
            fontSize={20}
          >
            Source code
          </Link>
        </Box>
      </Box>
    </>
  );
}

export default Footer;
