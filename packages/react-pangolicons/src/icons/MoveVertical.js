
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
          className={['pangolicons pangolicons-moveVertical', className].join(" ")}
        >
          <path  d="M9.35,4.65l2.65-2.65,2.65,2.65m-5.29,14.71l2.65,2.65,2.65-2.65M12,2V22"/>
        </svg>
      );
    };
    
	