
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
          className="pangolicons pangolicons-cameraOff {className}"
        >
          <polyline  points="8.49 4.89 10 3.88 14 3.88 17.73 6.38"/><path  d="M16.27,20.12H3.88A1.88,1.88,0,0,1,2,18.25v-10a1.87,1.87,0,0,1,.55-1.32"/><path  d="M17.73,6.38h2.39A1.88,1.88,0,0,1,22,8.25v9.37"/><path  d="M14.5,14.5a3.12,3.12,0,1,1-4.37-4.38"/><line  x1="2" y1="2" x2="22" y2="22"/>
        </svg>
      );
    };
    
	