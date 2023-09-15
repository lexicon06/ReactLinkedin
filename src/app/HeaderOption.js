import React from 'react'
import "./HeaderOption.css";
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';



function HeaderOption({avatar, Icon, Title, onClick}) {


  const user = useSelector(selectUser);

  return (
    <div onClick={onClick} className="headerOption">
        {avatar &&(
          <Avatar className='headerOption__icon' src={user?.photoUrl} alt="avatar">{user?.email[0]}</Avatar>
        )}
        {Icon && <Icon className="headerOption__icon"/>}
        <h3 className="headerOption__title">{Title==='User' ? user?.displayName ? user.displayName:'User': Title}</h3>
    </div>
  )
}

export default HeaderOption