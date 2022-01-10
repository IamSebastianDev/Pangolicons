
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
          className={['pangolicons pangolicons-key', className].join(" ")}
        >
          <rect  x="1.95" y="12.35" width="8.82" height="8.82" rx="3.53" transform="translate(13.71 0.41) rotate(45)"/><line  x1="10.51" y1="12.6" x2="19.87" y2="3.25"/><polyline  points="18.83 4.29 21.95 7.41 18.83 10.52 16.75 8.45"/>
        </svg>
      );
    };
    
	