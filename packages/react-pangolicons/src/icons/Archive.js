
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
          className={['pangolicons pangolicons-archive', className].join(" ")}
        >
          <path  d="M21,7.62H3a1,1,0,0,1-1-1V4.87a1,1,0,0,1,1-1H21a1,1,0,0,1,1,1V6.63A1,1,0,0,1,21,7.62Zm-17.13,0V18.14a2,2,0,0,0,2,2H18.14a2,2,0,0,0,2-2V7.62M8.25,11.38h7.5"/>
        </svg>
      );
    };
    
	