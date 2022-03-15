
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
          <path  d="M4.64,15.71C-.3,8.4,3.2,2.07,3.2,2.07H7.42l1.06,4.22-2.11,2.11s-1.54,.77,1.31,4.29m1.13,7c7.3,4.52,13.19,.79,13.19,.79l-.11-4.22-4.25-.94-2.05,2.17s-.49,1.82-4.24-1.16M3.18,20.82L20.82,3.18"/>
        </svg>
      );
    };
    
	