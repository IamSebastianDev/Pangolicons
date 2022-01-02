
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
          className="pangolicons pangolicons-bold {className}"
        >
          <path  d="M5.08,2.71A.69.69,0,0,1,5.76,2H13.6C16,2,17.86,4.24,17.86,7S16,12,13.6,12H5.08Z"/><path  d="M5.08,12.71A.69.69,0,0,1,5.76,12h8.9c2.36,0,4.26,2.24,4.26,5s-1.9,5-4.26,5H5.76a.69.69,0,0,1-.68-.71Z"/>
        </svg>
      );
    };
    
	