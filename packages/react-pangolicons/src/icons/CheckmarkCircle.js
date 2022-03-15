
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
          className={['pangolicons pangolicons-checkmarkCircle', className].join(" ")}
        >
          <path  d="M20.9,4.78L10.34,14.78l-2.8-2.94M15.64,2.68c-1.13-.44-2.35-.68-3.64-.68C6.48,2,2,6.48,2,12s4.48,10,10,10,10-4.48,10-10"/>
        </svg>
      );
    };
    
	