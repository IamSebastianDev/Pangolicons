
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
          className={['pangolicons pangolicons-fork', className].join(" ")}
        >
          <path  d="M18.74,5.26l-4.36,4.36L2,22M22,8.32l-3.24,3.24s-2.68,2.68-5.51-.81m0,0c-3.48-2.83-.81-5.51-.81-5.51l3.24-3.24"/>
        </svg>
      );
    };
    
	