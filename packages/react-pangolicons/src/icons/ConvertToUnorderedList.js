
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
          className={['pangolicons pangolicons-convertToUnorderedList', className].join(" ")}
        >
          <path  d="M8.67,12h13.33M2,5.33H22m-13.33,13.33h13.33M3.65,12h.02m-.02,6.67h.02"/>
        </svg>
      );
    };
    
	