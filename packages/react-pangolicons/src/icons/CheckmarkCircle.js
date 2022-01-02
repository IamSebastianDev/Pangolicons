
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
          className="pangolicons pangolicons-checkmarkCircle {className}"
        >
          <polyline  points="20.9 4.78 10.34 14.78 7.54 11.84"/><path  d="M22,12a10,10,0,1,1-6.36-9.32"/>
        </svg>
      );
    };
    
	