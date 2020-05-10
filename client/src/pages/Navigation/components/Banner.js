import React from "react";
import "./Banner.css"
export default function Banner({children, subtitle, title}){
    return(
        <div className="banner">

          <h1>{title}</h1>
          <p>{subtitle}</p>
          {children}
        </div>
    )
}