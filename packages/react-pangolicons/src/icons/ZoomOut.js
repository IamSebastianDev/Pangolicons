
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
          className={['pangolicons pangolicons-zoomOut', className].join(" ")}
        >
          <circle  cx="14.86" cy="9.14" r="7.14"/><path  d="M9.35,14.65,2,22Z"/><line  x1="12" y1="9.14" x2="18.2" y2="9.14"/>
        </svg>
      );
    };
    
	