
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
          className={['pangolicons pangolicons-headingIncrease', className].join(" ")}
        >
          <path  d="M10.57,20.57V3.43H2m20,10-2.86-2.86-2.85,2.86,2.85-2.86v10M10.57,3.43h8.57"/>
        </svg>
      );
    };
    
	