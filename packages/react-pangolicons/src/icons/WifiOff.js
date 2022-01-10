
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
          className={['pangolicons pangolicons-wifiOff', className].join(" ")}
        >
          <circle  cx="12.01" cy="17.66" r="0.75"/><path  d="M14.39,13.81a4.5,4.5,0,0,1,1.37,1.31"/><path  d="M17.22,11.2A8.12,8.12,0,0,1,18.88,13"/><path  d="M5.13,13a8.31,8.31,0,0,1,5.45-3.54"/><path  d="M19.73,8.38A12,12,0,0,1,22,10.88"/><path  d="M2,10.91A12.06,12.06,0,0,1,12,5.59a12.94,12.94,0,0,1,1.77.12"/><line  x1="19.5" y1="4.5" x2="4.5" y2="19.5"/>
        </svg>
      );
    };
    
	