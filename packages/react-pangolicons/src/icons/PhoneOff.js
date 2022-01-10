
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
          className={['pangolicons pangolicons-phoneOff', className].join(" ")}
        >
          <path  d="M4.64,15.71C-.3,8.4,3.2,2.07,3.2,2.07H7.42L8.48,6.29,6.37,8.4s-1.55.77,1.3,4.3m1.14,7c7.3,4.52,13.19.79,13.19.79l-.11-4.22-4.25-.94-2.05,2.17s-.49,1.82-4.24-1.16"/><line  x1="3.18" y1="20.82" x2="20.82" y2="3.18"/>
        </svg>
      );
    };
    
	