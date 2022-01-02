
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
          className="pangolicons pangolicons-shield {className}"
        >
          <path  d="M14,21.05a33.42,33.42,0,0,0,6.84-15.3,2.31,2.31,0,0,0-2-2.54L12.49,2a3.22,3.22,0,0,0-1,0L5.14,3.21a2.31,2.31,0,0,0-2,2.54A33.42,33.42,0,0,0,10,21.05,2.64,2.64,0,0,0,14,21.05Z"/>
        </svg>
      );
    };
    
	