
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
          className={['pangolicons pangolicons-envelope', className].join(" ")}
        >
          <path  d="M20.1,20.12H3.9c-1.04,0-1.9-.85-1.9-1.9V5.77c0-1.04,.85-1.9,1.9-1.9H20.1c1.04,0,1.9,.85,1.9,1.9v12.45c0,1.04-.85,1.9-1.9,1.9ZM3.25,5.12l8.75,7.5,8.75-7.5"/>
        </svg>
      );
    };
    
	