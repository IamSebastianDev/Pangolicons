
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
          className={['pangolicons pangolicons-clouds', className].join(" ")}
        >
          <path  d="M5.07,19.71H16.86a4.57,4.57,0,0,0,0-9.14A4.63,4.63,0,0,0,15,11a6.85,6.85,0,1,0-9.93,8.74Z"/><path  d="M12.58,5a6.79,6.79,0,0,1,3.13-.75A6,6,0,0,1,22,10"/>
        </svg>
      );
    };
    
	