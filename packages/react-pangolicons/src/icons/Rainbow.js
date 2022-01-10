
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
          className={['pangolicons pangolicons-rainbow', className].join(" ")}
        >
          <path  d="M16,17a4,4,0,0,0-8,0"/><path  d="M19,17A7,7,0,0,0,5,17"/><path  d="M22,17A10,10,0,0,0,2,17"/>
        </svg>
      );
    };
    
	