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
      <Box
        maxWidth={1000}
        margin={"auto"}
        borderRadius={10}
        backgroundColor={"#202B3B"}
        marginTop={4}
        color={"lightgray"}
        marginBottom={4}
      >
        <Box
          margin="0 auto"
          display="grid"
          gridTemplateColumns="repeat(auto-fit, 150px)"
          justifyContent="space-around"
          rowGap="20px"
          columnGap="1.33%"
        >
          {list.slice(1, 6 + 1).map((item) => (
            <Box
              key={item.id}
              sx={{
                boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
                borderRadius: "20px",
                overflow: "hidden",
                transition: "transform 0.2 ease-in-out",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Box>
                <Typography
                  variant="h2"
                  margin="auto"
                  fontSize="20px"
                  padding={3}
                >
                  {item.dt_txt.slice(10, 16)}
                </Typography>
              </Box>
              <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"space-between"}
              >
                <Image
                  src={require(`../public/img/${item.weather[0].icon.slice(
                    0,
                    -1
                  )}.png`)}
                  alt="/"
                  width="100"
                  height="100"
                />
                <Typography
                  variant="h2"
                  margin="auto"
                  fontSize="30px"
                  padding={3}
                >
                  {item.main.temp.toFixed(0)}&#176;C
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
