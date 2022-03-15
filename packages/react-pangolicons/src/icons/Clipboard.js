
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
          className={['pangolicons pangolicons-clipboard', className].join(" ")}
        >
          <path  d="M15.75,4.5h3.75V22H4.5V4.5h3.75m7.5,0-7.5,0,7.5-2.5h-7.5v3.75h7.5V2Z"/>
        </svg>
      );
    };
    
	