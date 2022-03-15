
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
          className={['pangolicons pangolicons-squarePlus', className].join(" ")}
        >
          <path  d="M8.67,12h6.67m-3.33,3.33v-6.67m10,10.33V5c0-1.65-1.35-3-3-3H5c-1.65,0-3,1.35-3,3v14c0,1.65,1.35,3,3,3h14c1.65,0,3-1.35,3-3Z"/>
        </svg>
      );
    };
    
	