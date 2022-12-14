import React, { useState } from "react";
import Song from "../song/song.js";
import Sarah from "../images/sarah.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { logoutThunk } from "./users-thunk";
import SarahMingles from "./emma-mingles";

export const Profile = () => {
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const handleLogoutBtn = () => {
    dispatch(logoutThunk());
    navigate("/login");
  };

  return (
    <div>
      <div>
        <div class="wd-user-section">
          <img class="wd-prof-pic" src={Sarah} alt="sarah " />
          <h1 class="wd-username">Emma Bell</h1>

          {currentUser && <h2>Welcome new user: {currentUser.username}</h2>}
        </div>
        <div class="wd-username-section">
          <p>@bellemma</p>
          <button class="btn btn-primary">edit profile</button>

          <p>80 Followers 30 Following</p>
        </div>
        <button className="btn btn-danger" onClick={handleLogoutBtn}>
          Logout
        </button>
        <h3 class="wd-top-songs-header"> Emma's Top Songs </h3>

        <Song />
        <SarahMingles />
      </div>
    </div>
  );
};
export default Profile;
