
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
          className={['pangolicons pangolicons-user', className].join(" ")}
        >
          <path  d="M4.5,20.23V17.32a1.89,1.89,0,0,1,1.74-2H17.76a1.89,1.89,0,0,1,1.74,2v2.91"/><circle  cx="12" cy="7.81" r="4.04"/>
        </svg>
      );
    };
    
	