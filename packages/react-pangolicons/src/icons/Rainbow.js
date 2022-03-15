
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
          className={['pangolicons pangolicons-rainbow', className].join(" ")}
        >
          <path  d="M8,17c0-2.21,1.79-4,4-4s4,1.79,4,4m3,0c0-3.87-3.13-7-7-7s-7,3.13-7,7m17,0c0-5.52-4.48-10-10-10S2,11.48,2,17"/>
        </svg>
      );
    };
    
	