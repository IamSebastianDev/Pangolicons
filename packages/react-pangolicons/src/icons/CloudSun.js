
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
          className={['pangolicons pangolicons-cloudSun', className].join(" ")}
        >
          <path  d="M4.75,22H15.34a4.11,4.11,0,0,0,0-8.21,4.2,4.2,0,0,0-1.67.36A6.15,6.15,0,1,0,4.75,22Z"/><path  d="M10.54,8a3.87,3.87,0,0,1,6.62,2.74"/><line  x1="13.28" y1="2.02" x2="13.28" y2="3.96"/><line  x1="22" y1="10.74" x2="20.06" y2="10.74"/><line  x1="7.47" y1="4.92" x2="8.6" y2="6.06"/><line  x1="19.09" y1="4.92" x2="18.12" y2="5.89"/>
        </svg>
      );
    };
    
	