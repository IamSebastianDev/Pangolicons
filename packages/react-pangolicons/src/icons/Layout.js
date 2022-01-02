
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
          className="pangolicons pangolicons-layout {className}"
        >
          <path  d="M20.6,20.75H3.4A1.39,1.39,0,0,1,2,19.35V4.65a1.39,1.39,0,0,1,1.4-1.4H20.6A1.39,1.39,0,0,1,22,4.65v14.7A1.39,1.39,0,0,1,20.6,20.75Zm-12.35,0V3.25M22,10.15H8.25"/>
        </svg>
      );
    };
    
	