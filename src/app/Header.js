import React from 'react'
import './Header.css'
import HeaderOption from './HeaderOption';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccount from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { useDispatch } from 'react-redux';
import { getAuth, signOut } from "firebase/auth";
import { logout } from '../features/userSlice';



function Header() {
  const dispatch = useDispatch();

 


  const logoutOfApp = () => {
    dispatch(logout());
    const auth = getAuth();
    signOut(auth);
  };
  return (
    <div className="header">

        <div className="header__left">
            <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt="" />
            <div className="header__search">
                {/* Search Icon */}
                <SearchIcon/>
                <input type="text" placeholder='Search' />
                
            </div>
        </div>
        <div className="header__right">
            <HeaderOption Icon={HomeIcon} Title="Home"/>
            <HeaderOption Icon={SupervisorAccount} Title="My Network"/>
            <HeaderOption Icon={BusinessCenterIcon} Title="Busines"/>
            <HeaderOption Icon={ChatIcon} Title="Chat"/>
            <HeaderOption Icon={NotificationsNoneIcon} Title="Notifications"/>

            <HeaderOption avatar={true} Title="User"
            onClick={logoutOfApp}
            />
        </div>
    </div>
  )
}

export default Header