
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
          className={['pangolicons pangolicons-crown', className].join(" ")}
        >
          <path  d="M2,16.24V5.7l4.89,5.82,4.92-5.83,5.56,5.83,4.63-6.18v10.91s-9.09,5.45-20,0Z"/>
        </svg>
      );
    };
    
	