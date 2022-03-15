
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
          className={['pangolicons pangolicons-wrench', className].join(" ")}
        >
          <path  d="M5.87,21.34c-.89,.89-2.32,.89-3.21,0h0c-.89-.89-.89-2.32,0-3.21L10.68,10.12C9.08,.5,18.69,2.1,18.69,2.1l-4.01,4.01,3.21,3.21,4.01-4.01s1.6,9.62-8.01,8.01L5.87,21.34Z"/>
        </svg>
      );
    };
    
	