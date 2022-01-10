
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
          className={['pangolicons pangolicons-layoutColumns', className].join(" ")}
        >
          <rect  x="2" y="2" width="20" height="20"/><line  x1="8.47" y1="2" x2="8.47" y2="22"/><line  x1="15.53" y1="2" x2="15.53" y2="22"/>
        </svg>
      );
    };
    
	