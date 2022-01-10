
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
          className={['pangolicons pangolicons-fnTab', className].join(" ")}
        >
          <rect  x="2" y="2" width="20" height="20" rx="1.5"/><polyline  points="12.12 15.53 15.38 12 12.12 8.47"/><line  x1="15.38" y1="12" x2="5.97" y2="12"/><line  x1="18.03" y1="8.47" x2="18.03" y2="15.53"/>
        </svg>
      );
    };
    
	