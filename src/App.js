import './App.css';
import HomeComponent from "./home";
import 'bootswatch/dist/quartz/bootstrap.min.css';
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import Profile from "./users/profile.js";
import Login from "./users/login.js"
import HeaderComponent from "./header";
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import Users from '../src/users/index.js'
import ProtectedRoute from "react-protected-route-component";



const store = configureStore({
  reducer: {
    
  }
})

function App() {
  return (
    <div>
    <Provider store={store}>
      <BrowserRouter>
        <HeaderComponent/>

        <Routes>
        <Route path="/users" element={
                                <ProtectedRoute>
                                    <Users/>
                                </ProtectedRoute>
                            }/>
          
        <Route path="/login" element={<Login/>}/>
          <Route path="/home" element={<HomeComponent/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
      </Provider>
      </div>
  );
}
export default App;
