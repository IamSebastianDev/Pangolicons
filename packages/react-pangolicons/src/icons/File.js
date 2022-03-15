
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
          className={['pangolicons pangolicons-file', className].join(" ")}
        >
          <path  d="M20.21,9.14v10.86c0,1.1-.86,1.99-1.91,1.99H5.7c-1.06,0-1.91-.89-1.91-1.99V3.99c0-1.1,.86-1.99,1.91-1.99h7.67l6.85,7.14h-6.85V2l6.85,7.14Z"/>
        </svg>
      );
    };
    
	