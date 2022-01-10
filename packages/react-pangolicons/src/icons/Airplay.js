
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
          className={['pangolicons pangolicons-airplay', className].join(" ")}
        >
          <path  d="M3.74,16.06A1.74,1.74,0,0,1,2,14.32V4.05A1.74,1.74,0,0,1,3.74,2.31H20.26A1.74,1.74,0,0,1,22,4.05V14.32a1.74,1.74,0,0,1-1.74,1.74"/><polygon  points="12 14.19 5.5 21.69 18.5 21.69 12 14.19"/>
        </svg>
      );
    };
    
	