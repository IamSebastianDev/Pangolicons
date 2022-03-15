
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
          className={['pangolicons pangolicons-list', className].join(" ")}
        >
          <path  d="M6.29,12h15.71M6.29,4.86h15.71M6.29,19.14h15.71M2,12h.14m-.14-7.14h.14m-.14,14.29h.11"/>
        </svg>
      );
    };
    
	