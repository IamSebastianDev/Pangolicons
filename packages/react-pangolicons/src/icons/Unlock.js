
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
          className="pangolicons pangolicons-unlock {className}"
        >
          <path  d="M18.34,22H5.66a2,2,0,0,1-2-2V13.39a2,2,0,0,1,2-2H18.34a2,2,0,0,1,2,2V20A2,2,0,0,1,18.34,22ZM18,5.34A6.05,6.05,0,1,0,7.19,10.77"/><circle  cx="16.38" cy="15.12" r="0.63"/>
        </svg>
      );
    };
    
	