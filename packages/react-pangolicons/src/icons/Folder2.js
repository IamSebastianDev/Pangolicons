
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
          className={['pangolicons pangolicons-folder2', className].join(" ")}
        >
          <path  d="M22,19.65H2V4.35H7.91l2.91,4.71h11.18v10.59Zm0-13.53v-.43c0-.73-.6-1.33-1.33-1.33H12"/>
        </svg>
      );
    };
    
	