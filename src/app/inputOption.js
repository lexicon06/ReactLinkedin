import React from "react";
import "./inputOption.css";

function InputOption({Icon, title, color}) {
  return (
    <div>
        <div className="inputOption">
       <Icon style={{ color: color }} />
        <p>{title}</p>
        </div>
    </div>
  )
}

export default InputOption