
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
          className="pangolicons pangolicons-userMultiple {className}"
        >
          <path  d="M2,20.23V17.32a1.89,1.89,0,0,1,1.74-2H15.27a1.89,1.89,0,0,1,1.73,2v2.91"/><circle  cx="9.5" cy="7.81" r="4.04"/><path  d="M20.26,15.31a1.89,1.89,0,0,1,1.74,2v2.91"/><path  d="M15.67,3.77a4,4,0,1,1,0,8.08"/>
        </svg>
      );
    };
    
	