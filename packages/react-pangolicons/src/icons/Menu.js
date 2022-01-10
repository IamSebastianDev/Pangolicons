
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
          className={['pangolicons pangolicons-menu', className].join(" ")}
        >
          <line  x1="2" y1="12" x2="22" y2="12"/><line  x1="2" y1="6" x2="22" y2="6"/><line  x1="2" y1="18" x2="22" y2="18"/>
        </svg>
      );
    };
    
	