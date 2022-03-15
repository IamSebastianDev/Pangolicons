
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
          className={['pangolicons pangolicons-chevronsLeft', className].join(" ")}
        >
          <path  d="M19,18.63l-6.63-6.63,6.63-6.63m-7.37,0l-6.63,6.63,6.63,6.63"/>
        </svg>
      );
    };
    
	