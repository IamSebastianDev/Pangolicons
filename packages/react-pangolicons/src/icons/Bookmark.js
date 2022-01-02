
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
          className="pangolicons pangolicons-bookmark {className}"
        >
          <path  d="M4,22V3.88A1.88,1.88,0,0,1,5.88,2H18.12A1.88,1.88,0,0,1,20,3.88V22m0,0-8-5.13L4,22"/>
        </svg>
      );
    };
    
	