
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
          className={['pangolicons pangolicons-volumeMedium', className].join(" ")}
        >
          <rect  x="3.73" y="8.15" width="4.62" height="7.69"/><polygon  points="14.5 2 8.35 8.15 8.35 15.85 14.5 22 14.5 2"/><path  d="M19.12,7.38a9.87,9.87,0,0,1,0,9.24"/>
        </svg>
      );
    };
    
	