import './App.css';
import HomeComponent from "./home";
import 'bootswatch/dist/quartz/bootstrap.min.css';
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import Profile from "./profile";
import HeaderComponent from "./header";

function App() {
  return (
      <BrowserRouter>
        <HeaderComponent/>
        <Routes>
          <Route path="/" element={<HomeComponent/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
