import './App.css';
import HomeComponent from "./home";
import 'bootswatch/dist/quartz/bootstrap.min.css';
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import Profile from "./profile";
import HeaderComponent from "./header";
import {getTokenFromURL} from "./spotify/get-token";
import SpotifyWebApi from "spotify-web-api-js";
import {useEffect, useState} from "react";

function App() {
  const spotify = new SpotifyWebApi();
  const [spotifyToken, setSpotifyToken] = useState("");
  useEffect(() => {
    console.log("from url: " + getTokenFromURL())
    //spotify token
    const _spotifyToken = getTokenFromURL();
    // take token out of url
    window.location.hash = '';

    if (_spotifyToken) {
      setSpotifyToken(_spotifyToken);
      spotify.setAccessToken(_spotifyToken);

      spotify.getMe().then(user => console.log(user))
    }
  }, [])
  return (
      <BrowserRouter>
        <HeaderComponent token={spotifyToken}/>
        <Routes>
          <Route path="/" element={<HomeComponent/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
