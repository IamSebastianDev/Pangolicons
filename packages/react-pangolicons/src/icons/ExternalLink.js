
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
          className="pangolicons pangolicons-externalLink {className}"
        >
          <path  d="M22,12v8.26A1.74,1.74,0,0,1,20.26,22H3.74A1.74,1.74,0,0,1,2,20.26V3.74A1.74,1.74,0,0,1,3.74,2H12m0,10L22,2H17m5,0V6.19"/>
        </svg>
      );
    };
    
	