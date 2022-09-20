import React from "react";
import "./home.scss";
import NavBar from "../navbar/NavBar";
import SideBarRight from "../sideBarRight/sideBarRight.";
import SideBarLeft from "../sideBarLeft/sideBarLeft";
import Post from "../Posts/post";
function Home() {
  return (
    <div>
      <NavBar className="nav-bar" />
      <div className="home-content">
        <div className="side-bar-left">
          <SideBarLeft />
        </div>
        <div className="posts"><Post /></div>
        <div className="side-bar-right">
          <SideBarRight />
        </div>
      </div>
    </div>
  );
}

export default Home;
