
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
          className={['pangolicons pangolicons-move', className].join(" ")}
        >
          <path  d="M19.35,9.35l2.65,2.65-2.65,2.65M14.65,4.65l-2.65-2.65-2.65,2.65m0,14.71l2.65,2.65,2.65-2.65M4.65,9.35l-2.65,2.65,2.65,2.65m7.35,7.35V2M2,12H22"/>
        </svg>
      );
    };
    
	