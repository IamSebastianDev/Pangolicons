
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
          className={['pangolicons pangolicons-music', className].join(" ")}
        >
          <circle  cx="5.08" cy="19.12" r="2.88"/><polyline  points="7.97 19.3 7.97 4.58 21.8 2 21.8 16.72"/><circle  cx="18.92" cy="16.6" r="2.88"/>
        </svg>
      );
    };
    
	