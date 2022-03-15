
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
          className={['pangolicons pangolicons-starHalf', className].join(" ")}
        >
          <path  d="M12.76,18.58l-6.5,3.42,1.24-7.24L2.24,9.64l7.27-1.06,3.25-6.58"/>
        </svg>
      );
    };
    
	