
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
          className={['pangolicons pangolicons-volumeHigh', className].join(" ")}
        >
          <rect  x="2" y="8.43" width="4.29" height="7.14"/><polygon  points="12 2.71 6.29 8.43 6.29 15.57 12 21.29 12 2.71"/><path  d="M16.29,7.71a9.17,9.17,0,0,1,0,8.58"/><path  d="M20.57,6.29a12.1,12.1,0,0,1,0,11.42"/>
        </svg>
      );
    };
    
	