
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
          className={['pangolicons pangolicons-chevronLeftRight', className].join(" ")}
        >
          <path  d="M14.24,6.24l5.76,5.76-5.76,5.76M9.76,6.24l-5.76,5.76,5.76,5.76"/>
        </svg>
      );
    };
    
	