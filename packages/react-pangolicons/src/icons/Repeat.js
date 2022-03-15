
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
          className={['pangolicons pangolicons-repeat', className].join(" ")}
        >
          <path  d="M3.87,11.15h0c0-2.95,2.39-5.35,5.35-5.35h10.91m-3.8,3.8l3.8-3.8-3.8-3.8M3.87,18.2H14.78c2.95,0,5.35-2.39,5.35-5.35h0m-12.45,1.55l-3.8,3.8,3.8,3.8"/>
        </svg>
      );
    };
    
	