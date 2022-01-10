
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
          className={['pangolicons pangolicons-clipboard', className].join(" ")}
        >
          <polyline  points="15.75 4.5 19.5 4.5 19.5 22 4.5 22 4.5 4.5 8.25 4.5"/><rect  x="8.25" y="2" width="7.5" height="3.75"/>
        </svg>
      );
    };
    
	