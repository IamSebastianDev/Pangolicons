
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
          className={['pangolicons pangolicons-moveHorizontal', className].join(" ")}
        >
          <path  d="M19.35,9.35l2.65,2.65-2.65,2.65M4.65,9.35l-2.65,2.65,2.65,2.65m-2.65-2.65H22"/>
        </svg>
      );
    };
    
	