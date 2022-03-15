
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
          className={['pangolicons pangolicons-volumeLow', className].join(" ")}
        >
          <path  d="M11.23,15.85H6.62v-7.69h4.62v7.69ZM17.38,2l-6.15,6.15v7.69l6.15,6.15V2Z"/>
        </svg>
      );
    };
    
	