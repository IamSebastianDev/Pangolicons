
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
          className={['pangolicons pangolicons-fnEscape', className].join(" ")}
        >
          <path  d="M12,6.12A5.88,5.88,0,1,1,6.12,12"/><line  x1="10.82" y1="10.82" x2="6.12" y2="6.12"/><polyline  points="6.12 8.47 6.12 6.12 8.47 6.12"/><rect  x="2" y="2" width="20" height="20" rx="1.5"/>
        </svg>
      );
    };
    
	