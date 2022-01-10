
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
          className={['pangolicons pangolicons-refresh', className].join(" ")}
        >
          <path  d="M2.86,11a9,9,0,0,0-.07,1.17A9.21,9.21,0,1,0,12,3c-2.76,0-4.89,2-6.58,4m0,0L6.49,1.4M5.42,6.93l4.34.57"/>
        </svg>
      );
    };
    
	