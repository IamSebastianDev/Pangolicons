
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
          className={['pangolicons pangolicons-icecream', className].join(" ")}
        >
          <path  d="M4.64,11.98L13.48,3.14c1.52-1.52,4.01-1.52,5.53,0l1.85,1.85c1.52,1.52,1.52,4.01,0,5.53l-8.84,8.84-7.38-7.38Zm3.69,3.69l-6.33,6.33"/>
        </svg>
      );
    };
    
	