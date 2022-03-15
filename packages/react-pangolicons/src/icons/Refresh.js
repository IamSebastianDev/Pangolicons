
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
          <path  d="M2.86,11.02c-.05,.38-.07,.77-.07,1.17,0,5.09,4.12,9.21,9.21,9.21s9.21-4.12,9.21-9.21S17.09,2.98,12,2.98c-2.76,0-4.89,2.03-6.58,3.95m0,0L6.49,1.4m-1.07,5.52l4.34,.58"/>
        </svg>
      );
    };
    
	