
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
          className="pangolicons pangolicons-phoneCall {className}"
        >
          <path  d="M6.37,17.9C-1,9.71,3.2,2.07,3.2,2.07H7.42L8.48,6.29,6.37,8.4S4.26,9.46,9.53,14.73M6.37,17.9C14.75,25.07,22,20.48,22,20.48l-.11-4.22-4.25-.94-2.05,2.17S15,19.87,9.53,14.73"/><path  d="M12.31,8.22a8.07,8.07,0,0,1,3.53,3.53"/><path  d="M13.86,4.22a13.54,13.54,0,0,1,5.89,5.89"/>
        </svg>
      );
    };
    
	