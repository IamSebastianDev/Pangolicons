
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
          className={['pangolicons pangolicons-shuffle', className].join(" ")}
        >
          <path  d="M2,22L22,2m-6.47,20h6.47v-6.47m0-7.06V2h-6.47m-6.32,7.21L2,2M22,22l-7.05-7.05"/>
        </svg>
      );
    };
    
	