
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
          className={['pangolicons pangolicons-logoutLeft', className].join(" ")}
        >
          <path  d="M9.94,2H6.28A3,3,0,0,0,3.11,4.85v14.3A3,3,0,0,0,6.28,22H9.94"/><polyline  points="18.11 16.44 20.89 12 18.11 7.56 20.89 12 9.78 12"/>
        </svg>
      );
    };
    
	