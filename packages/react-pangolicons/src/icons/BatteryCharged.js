
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
          className={['pangolicons pangolicons-batteryCharged', className].join(" ")}
        >
          <rect  x="2" y="7.29" width="16.47" height="9.41" rx="1.82"/><line  x1="5.53" y1="10.82" x2="5.53" y2="13.18"/><line  x1="10.24" y1="10.82" x2="10.24" y2="13.18"/><line  x1="14.94" y1="10.82" x2="14.94" y2="13.18"/><line  x1="22" y1="10.82" x2="22" y2="13.18"/>
        </svg>
      );
    };
    
	