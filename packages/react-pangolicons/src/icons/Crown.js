
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
          <path  d="M2,16.24V5.7l4.89,5.82,4.92-5.84,5.56,5.84L22,5.33V16.24A21.74,21.74,0,0,1,2,16.24Z"/>
        </svg>
      );
    };
    
	