
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
          className={['pangolicons pangolicons-cornerArrowUpRight', className].join(" ")}
        >
          <path  d="M4.61,22V12.04c0-1.99,1.61-3.6,3.6-3.6h11.18l-6.44,6.44,6.44-6.44L12.95,2"/>
        </svg>
      );
    };
    
	