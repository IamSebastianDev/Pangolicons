
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
          className={['pangolicons pangolicons-camera', className].join(" ")}
        >
          <path  d="M7.52,3.88m10.21,2.5l-3.73-2.5h-4l-3.73,2.5H3.88c-1.04,0-1.88,.84-1.88,1.88v9.99c0,1.04,.84,1.88,1.88,1.88H20.12c1.04,0,1.88-.84,1.88-1.88V8.25c0-1.04-.84-1.88-1.88-1.88h-2.39m-5.73,3.12c-1.73,0-3.12,1.4-3.12,3.12s1.4,3.12,3.12,3.12,3.12-1.4,3.12-3.12-1.4-3.12-3.12-3.12Z"/>
        </svg>
      );
    };
    
	