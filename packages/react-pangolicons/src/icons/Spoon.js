
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
          className={['pangolicons pangolicons-spoon', className].join(" ")}
        >
          <path  d="M21.35,2.65c-1.52-1.52-5.23-.29-8.28,2.76-3.05,3.05-2.9,5.37-1.38,6.9,1.52,1.52,3.85,1.67,6.9-1.38,3.05-3.05,4.28-6.75,2.76-8.28ZM11.69,12.31L2,22"/>
        </svg>
      );
    };
    
	