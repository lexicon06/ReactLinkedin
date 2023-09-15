import React from "react";
import "./Sidebar.css";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

function Sidebar() {
  const user = useSelector(selectUser);
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );






  return (
    <aside className="sidebar">
     <div className="sidebar__top">
        <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80" alt="" />
        <Avatar className="sidebar__avatar" src={user.photoUrl}>
        {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
        </div>
        <div className="sidebar__stats">
        <div className="sidebar__stat">
        <p>Who viewed you</p>
        <p className="sidebar__statNumber">2,543</p>
  </div>

  <div className="sidebar__stat">
  <p>View on post</p>
  <p className="sidebar__statNumber">2,878</p>
  </div>
        </div>

     
     <div className="sidebar__bottom">
        <p>Recent</p>

        {recentItem('React')}
        {recentItem('Redux')}
        {recentItem('Flexbox')}
        {recentItem('Firebase')}
        {recentItem('Developer')}



     </div>
   
    </aside>
  )
}

export default Sidebar