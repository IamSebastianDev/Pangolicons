
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
          <path  d="M9.94,22h-3.66c-1.74,0-3.17-1.28-3.17-2.85V4.85c0-1.57,1.43-2.85,3.17-2.85h3.66m8.17,14.44l2.78-4.44-2.78-4.44,2.78,4.44H9.78"/>
        </svg>
      );
    };
    
	