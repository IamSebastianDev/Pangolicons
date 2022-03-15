
    import React from "react";

    export default ({
      size = "24",
      color = "currentColor",
      strokeWidth = "1.5",
      linecap = "round",
      linejoin = "round",
      className = ""
    }) => {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          fill="none"
          viewBox="0 0 24 24"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap={linecap}
          strokeLinejoin={linejoin}
          className={['pangolicons pangolicons-batteryEmpty', className].join(" ")}
        >
          <path  d="M16.65,16.71H3.82c-1,0-1.82-.82-1.82-1.82v-5.78c0-1,.82-1.82,1.82-1.82h12.84c1,0,1.82,.82,1.82,1.82v5.78c0,1-.82,1.82-1.82,1.82Zm5.35-5.88v2.35"/>
        </svg>
      );
    };
    
	