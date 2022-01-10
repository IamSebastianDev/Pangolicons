
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
          className={['pangolicons pangolicons-circlePlus', className].join(" ")}
        >
          <line  x1="8.67" y1="12" x2="15.33" y2="12"/><line  x1="12" y1="15.33" x2="12" y2="8.67"/><circle  cx="12" cy="12" r="10"/>
        </svg>
      );
    };
    
	