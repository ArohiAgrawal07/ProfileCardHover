import React, { useState, useEffect } from "react";

const Card = (props) => {
  const [seconds, setSeconds] = useState(0);

   // Timer effect with dependency on all relevant props
  useEffect(() => {
    // Reset timer whenever props change
    setSeconds(0);
    
    const interval = setInterval(() => {
      
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);
    
    return () => clearInterval(interval);
  }, [props.img, props.title, props.name, props.role]); // Reset when any of these change


  return (
    <div className="card">
      <div className="imgBox">
        <img src={props.img} alt={props.alt}/>
      </div>
      <div className="content">
        {/* Show name if provided, otherwise show title */}
        <h2>{props.name || props.title}</h2>
        {/* Show role if provided */}
        {props.role && <p className="role">{props.role}</p>}
        <p>{props.description}</p>
        <div className="timer">Active time: {seconds}s</div>
      </div>
    </div>
  );
}

export default Card;