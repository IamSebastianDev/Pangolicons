
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
          className={['pangolicons pangolicons-heart', className].join(" ")}
        >
          <path  d="M11.94,7.49c0-3.03,2.39-5.49,5.35-5.49,.03,0,.06,0,.09,0,3.75,.06,5.85,4.54,3.84,7.79l-9.28,12.21L2.94,9.87c-2.24-3.15-.23-7.8,3.57-7.87,.03,0,.06,0,.09,0,2.95,0,5.35,2.46,5.35,5.49"/>
        </svg>
      );
    };
    
	