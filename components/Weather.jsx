import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Weather({ data }) {
  console.log("scam:" + data);
  // console.log("file:" + data2)

  return (
    <>
      <div>
        <Box
          maxWidth={600}
          margin={"auto"}
          marginBottom={6}
          boxShadow={"0 0 5px rgba(0, 0, 0, 0.2)"}
          borderRadius={10}
          backgroundColor={"rgba(255,255,255,0.4)"}
        >
          <Box>
            <Box display={"flex"} flexDirection={"column"} textAlign={"center"}>
              <Typography variant="h2" padding={2}>
                {data.name}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Box
                display={"flex"}
                flexDirection={"row"}
                justifyContent={"space-between"}
                width={"70%"}
              >
                <Typography variant="h2" margin="auto" fontSize="60px">
                  {data.main.temp.toFixed(0)}&#176;C
                </Typography>
                <Image
                  src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                  alt="/"
                  width="200"
                  height="200"
                />
              </Box>
              
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "80%",
                  paddingBottom: "16px",
                }}
              >
                <Typography variant="h2" fontSize="25px">
                  {data.weather[0].main}
                </Typography>
                <Typography variant="h2" fontSize="25px">
                  Feels like {data.main.feels_like.toFixed(0)}&#176;C
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </div>
    </>
  );
}

export default Weather;
