import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import { display } from "@mui/system";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

function Forecast({ data2 }) {
  const list = data2.list;

  return (
    <>
      <Box maxWidth={1000} margin={"auto"}>
        <Box
          margin="0 auto"
          display="grid"
          gridTemplateColumns="repeat(auto-fit, 200px)"
          justifyContent="space-around"
          rowGap="20px"
          columnGap="1.33%"
        >
          {list.map((item) => (
            <Box
              key={item.id}
              sx={{
                marginBottom: "20px",
                backgroundColor: "#fff",
                boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
                borderRadius: "10px",
                overflow: "hidden",
                transition: "transform 0.2 ease-in-out",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                backgroundColor: "rgba(255,255,255,0.4)",
              }}
            >
              <Box>
                <Typography
                  variant="h2"
                  margin="auto"
                  fontSize="20px"
                  padding={0.5}
                >
                  {item.dt_txt.slice(9, 10)}.{item.dt_txt.slice(6, 7)}
                </Typography>
                <Divider sx={{ border: "1px solid black" }} />
                <Typography
                  variant="h2"
                  margin="auto"
                  fontSize="20px"
                  padding={0.5}
                >
                  {item.dt_txt.slice(10, 16)} UTC
                </Typography>
              </Box>
              <Box
                display={"flex"}
                flexDirection={"row"}
                justifyContent={"space-between"}
              >
                <Typography
                  variant="h2"
                  margin="auto"
                  paddingLeft={2}
                  fontSize="30px"
                >
                  {item.main.temp.toFixed(0)}&#176;C
                </Typography>
                <Image
                  src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                  alt="/"
                  width="100"
                  height="100"
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "92%",
                  paddingBottom: "8px",
                }}
              >
                <Typography variant="h2" fontSize="15px">
                  {item.weather[0].main}
                </Typography>
                <Typography variant="h2" fontSize="15px">
                  Feels like {item.main.feels_like.toFixed(0)}&#176;C
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}

export default Forecast;
