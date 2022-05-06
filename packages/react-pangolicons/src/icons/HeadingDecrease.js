
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
          className={['pangolicons pangolicons-headingDecrease', className].join(" ")}
        >
          <path  d="M10.57,20.57V3.43H2m17.14,7.14v10l-2.85-2.86,2.85,2.86L22,17.71M10.57,3.43h8.57"/>
        </svg>
      );
    };
    
	