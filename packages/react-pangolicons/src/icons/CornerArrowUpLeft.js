
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
          className={['pangolicons pangolicons-cornerArrowUpLeft', className].join(" ")}
        >
          <path  d="M11.05,2,4.61,8.44l6.44,6.44L4.61,8.44H15.79a3.6,3.6,0,0,1,3.6,3.6V22"/>
        </svg>
      );
    };
    
	