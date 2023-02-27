import React, { useState } from "react";
//  import {Rating as Rate} from "@mui/material"
 
function Explore({image,des, p1, p2, p3, rating }) {
    const[value,setValue]=useState(0)
  return (
    <div >
      <div>
         <img className="explore" src={image} alt="" /> 
         <h3>{des}</h3> 
          <button className="biscuit">Quick Shop</button>
        <div className="price">
          <p>${p1}</p>
          <p>-</p>
          <p>${p2}</p>
          <p  className="explore">${p3}</p>
        </div>
      
        <div className="star">
        {/* <Rate 
  name="simple-controlled"
  value={rating}
  onChange={(event, newValue) => {
    setValue(newValue);
  }}
  /> */}
<span > {"("} <b>{rating}</b> {")"} </span>

        </div>
   

      </div>
    </div>
  );
}



export default Explore;
