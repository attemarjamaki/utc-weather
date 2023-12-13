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
        <Box maxWidth={1000} margin={"auto"} color={"lightgray"}>
          <Box>
            <Box display={"flex"} flexDirection={"column"} paddingLeft={6}>
              <Typography variant="h2" padding={2}>
                {data.name}
              </Typography>
              <Typography
                variant="h2"
                fontSize="18px"
                paddingLeft={2}
                marginTop={-2}
              >
                Feels like {data.main.feels_like.toFixed(0)}&#176;C
              </Typography>
              <Box
                display={"flex"}
                flexDirection={"row"}
                justifyContent={"space-between"}
                width={"100%"}
                margin={"auto"}
              >
                <Typography
                  variant="h2"
                  paddingLeft={2}
                  marginTop={16}
                  fontSize={80}
                  paddingRight={30}
                >
                  {data.main.temp.toFixed(0)}&#176;C
                </Typography>
                <Box margin={"auto"}>
                  <Image
                    src={require(`../public/img/${data.weather[0].icon.slice(
                      0,
                      -1
                    )}.png`)}
                    alt="/"
                    width="300"
                    height="300"
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          maxWidth={1000}
          margin={"auto"}
          borderRadius={10}
          backgroundColor={"#202B3B"}
          padding={4}
          color={"lightgray"}
        >
          <Typography>AIR CONDITIONS</Typography>
          <Box display={"flex"} flexWrap={"wrap"}>
            <Box
              width={"50%"}
              display={"flex"}
              paddingTop={6}
              paddingBottom={6}
            >
              <Image
                src={require("../public/assets/feels_like.png")}
                alt="/"
                width="20"
                height="20"
              />
              <Typography marginLeft={1}>Feels like:</Typography>
              <Typography marginLeft={1} fontWeight={"bold"}>
                {data.main.feels_like.toFixed(0)}&#176;C
              </Typography>
            </Box>
            <Box
              width={"50%"}
              display={"flex"}
              paddingTop={6}
              paddingBottom={6}
            >
              <Image
                src={require("../public/assets/humidity.png")}
                alt="/"
                width="20"
                height="20"
              />
              <Typography marginLeft={1}>Humidity:</Typography>
              <Typography marginLeft={1} fontWeight={"bold"}>
                {data.main.humidity}%
              </Typography>
            </Box>
            <Box
              width={"50%"}
              display={"flex"}
              paddingTop={2}
              paddingBottom={4}
            >
              <Image
                src={require("../public/assets/air-pressure.png")}
                alt="/"
                width="20"
                height="20"
              />
              <Typography marginLeft={1}>Air pressure:</Typography>
              <Typography marginLeft={1} fontWeight={"bold"}>
                {data.main.pressure} hPa
              </Typography>
            </Box>
            <Box
              width={"50%"}
              display={"flex"}
              paddingTop={2}
              paddingBottom={4}
            >
              <Image
                src={require("../public/assets/wind.png")}
                alt="/"
                width="20"
                height="20"
              />
              <Typography marginLeft={1}>Wind:</Typography>
              <Typography marginLeft={1} fontWeight={"bold"}>
                {data.wind.speed.toFixed(1)} m/s
              </Typography>
            </Box>
          </Box>
        </Box>
      </div>
    </>
  );
}

export default Weather;
