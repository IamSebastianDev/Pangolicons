
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
          className={['pangolicons pangolicons-volumeMute', className].join(" ")}
        >
          <path  d="M6.25,15.54H2v-7.08H6.25v7.08ZM11.91,2.79l-5.67,5.67v7.08l5.67,5.67V2.79Zm4.08,12.21l6.01-6.01m-6.01,0l6.01,6.01"/>
        </svg>
      );
    };
    
	