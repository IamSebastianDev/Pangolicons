
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
          className={['pangolicons pangolicons-creditcard', className].join(" ")}
        >
          <path  d="M20.24,19.56H3.76c-.97,0-1.76-.79-1.76-1.76V7.2c0-.97,.79-1.76,1.76-1.76H20.24c.97,0,1.76,.79,1.76,1.76v10.59c0,.97-.79,1.76-1.76,1.76ZM2,10.35H22"/>
        </svg>
      );
    };
    
	