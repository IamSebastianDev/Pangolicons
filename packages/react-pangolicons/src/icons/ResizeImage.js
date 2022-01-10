
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
          className={['pangolicons pangolicons-resizeImage', className].join(" ")}
        >
          <rect  x="2" y="2" width="20" height="20" rx="1.4"/><polyline  points="6.29 10.57 6.29 6.29 10.57 6.29"/><polyline  points="17.71 13.43 17.71 17.71 13.43 17.71"/>
        </svg>
      );
    };
    
	