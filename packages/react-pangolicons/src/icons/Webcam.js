
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
          className={['pangolicons pangolicons-webcam', className].join(" ")}
        >
          <circle  cx="12" cy="9.06" r="2.35"/><circle  cx="12" cy="9.06" r="7.06"/><line  x1="12" y1="16.12" x2="12" y2="22"/><line  x1="6.71" y1="22" x2="17.29" y2="22"/>
        </svg>
      );
    };
    
	