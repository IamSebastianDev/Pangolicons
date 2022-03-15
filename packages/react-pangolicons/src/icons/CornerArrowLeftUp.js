
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
          className={['pangolicons pangolicons-cornerArrowLeftUp', className].join(" ")}
        >
          <path  d="M22,19.39H12.04c-1.99,0-3.6-1.61-3.6-3.6V4.61l6.44,6.44-6.44-6.44L2,11.05"/>
        </svg>
      );
    };
    
	