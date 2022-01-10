
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
          className={['pangolicons pangolicons-italic', className].join(" ")}
        >
          <line  x1="7.03" y1="2" x2="21.23" y2="2"/><line  x1="14.13" y1="2" x2="9.87" y2="22"/><line  x1="2.77" y1="22" x2="16.97" y2="22"/>
        </svg>
      );
    };
    
	