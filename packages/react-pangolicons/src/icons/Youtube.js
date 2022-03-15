
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
          className={['pangolicons pangolicons-youtube', className].join(" ")}
        >
          <path  d="M21.1,19.04c-9.1,1.22-18.2,0-18.2,0-2.02-7.58,0-14.09,0-14.09,0,0,9.1-1.22,18.2,0h0s2.02,6.5,0,14.09h0ZM9.98,9.56v4.88l4.04-2.44-4.04-2.44"/>
        </svg>
      );
    };
    
	