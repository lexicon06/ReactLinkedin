import React, { forwardRef } from 'react'
import "./Post.css"
import { Avatar } from '@mui/material' 
import ThumbUpAltOutLinedIcon from "@mui/icons-material/ThumbUpAlt"
import ChatOutLinedIcon from "@mui/icons-material/Chat"
import SendOutLinedIcon from "@mui/icons-material/Send"
import ShareOutLinedIcon from "@mui/icons-material/Share"
import InputOption from './inputOption'

const Post = forwardRef(({name, description, message, photoUrl}, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="post__header">
        <Avatar src={photoUrl}>
          {name[0]}
          </Avatar>
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="post__body">
        <p>{message}</p>
      </div>

      <div className="post__buttons">
        <InputOption Icon={ThumbUpAltOutLinedIcon} title="Like" color="gray" />
        <InputOption Icon={ChatOutLinedIcon} title="Comment" color="gray" />
        <InputOption Icon={ShareOutLinedIcon} title="Share" color="gray" />
        <InputOption Icon={SendOutLinedIcon} title="Send" color="gray" />
      </div>
    </div>
  );
});


export default Post