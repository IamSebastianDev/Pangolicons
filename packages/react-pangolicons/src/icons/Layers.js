
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
          className={['pangolicons pangolicons-layers', className].join(" ")}
        >
          <path  d="M22,16.34l-9.93,4.96L2.14,16.34m-.14-4.34l9.93,4.96,9.93-4.96m0-4.34L11.93,2.69,2,7.66l9.93,4.96,9.93-4.96Z"/>
        </svg>
      );
    };
    
	