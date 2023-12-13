import React, { useState } from "react";
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";
import Weather from "./Weather";
import Forecast from "./Forecast";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import { Box } from "@mui/material";
import Footer from "./Footer";
import Home from "./Home";

function Main() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [forecast, setForecast] = useState({});

  const fetchData = (e) => {
    e.preventDefault();

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

    const url2 = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=8&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

    const getWeather = axios.get(url);
    const getForecast = axios.get(url2);

    axios.all([getWeather, getForecast]).then(
      axios.spread((...allData) => {
        const allWeatherData = allData[0];
        const allForecastData = allData[1];

        console.log(allWeatherData.data);
        console.log(allForecastData.data);

        setWeather(allWeatherData.data);
        setForecast(allForecastData.data);
        setCity("");
      })
    );
  };

  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        marginTop={"30px"}
        marginBottom={"50px"}
      >
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 400,
            opacity: "0.8",
          }}
          onSubmit={fetchData}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search City"
            inputProps={{ "aria-label": "search city" }}
            onChange={(e) => setCity(e.target.value)}
          />
          <IconButton
            type="button"
            sx={{ p: "10px" }}
            aria-label="search"
            onClick={fetchData}
          >
            <SearchIcon />
          </IconButton>
        </Paper>
      </Box>

      {/* Weather */}

      {weather.main && <Weather data={weather} />}
      {weather.main && <Forecast data2={forecast} />}
    </>
  );
}

export default Main;
