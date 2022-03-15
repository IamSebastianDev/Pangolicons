
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
          className={['pangolicons pangolicons-trello', className].join(" ")}
        >
          <path  d="M20.21,22H4.04V2H20.21V22ZM10.8,4.94h-3.53v14.12h3.53V4.94Zm6.47,0h-3.53v7.06h3.53V4.94Z"/>
        </svg>
      );
    };
    
	