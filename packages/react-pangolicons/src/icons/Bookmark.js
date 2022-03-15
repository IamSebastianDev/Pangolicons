
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
          className={['pangolicons pangolicons-bookmark', className].join(" ")}
        >
          <path  d="M4,22V3.88c0-1.04,.84-1.88,1.88-1.88h12.25c1.04,0,1.88,.84,1.88,1.88V22m0,0l-8-5.13-8,5.13"/>
        </svg>
      );
    };
    
	