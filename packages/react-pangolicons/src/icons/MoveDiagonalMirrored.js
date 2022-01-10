
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
          className={['pangolicons pangolicons-moveDiagonalMirrored', className].join(" ")}
        >
          <polyline  points="16 3.5 20.5 3.5 20.5 8"/><polyline  points="8 20.5 3.5 20.5 3.5 16"/><line  x1="3.5" y1="20.5" x2="20.5" y2="3.5"/>
        </svg>
      );
    };
    
	