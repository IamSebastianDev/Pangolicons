
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
          className={['pangolicons pangolicons-volumeHigh', className].join(" ")}
        >
          <path  d="M6.29,15.57H2v-7.14H6.29v7.14ZM12,2.71l-5.71,5.71v7.14l5.71,5.71V2.71Zm4.29,13.57c1.43-2.86,1.43-5.71,0-8.57m4.29,10c1.9-3.81,1.9-7.62,0-11.43"/>
        </svg>
      );
    };
    
	