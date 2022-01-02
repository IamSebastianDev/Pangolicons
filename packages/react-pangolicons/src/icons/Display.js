
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
          className="pangolicons pangolicons-display {className}"
        >
          <path  d="M22,14.63a1.74,1.74,0,0,1-1.74,1.75H3.74A1.74,1.74,0,0,1,2,14.63V4.37A1.74,1.74,0,0,1,3.74,2.62H20.26A1.74,1.74,0,0,1,22,4.37Z"/><polygon  points="12 21.38 7 21.38 17 21.38 12 21.38"/><line  x1="12" y1="16.38" x2="12" y2="21.38"/>
        </svg>
      );
    };
    
	