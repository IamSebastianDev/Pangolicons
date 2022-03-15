
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
          className={['pangolicons pangolicons-horizontalMore', className].join(" ")}
        >
          <path  d="M3.82,11.09v1.82H2v-1.82h1.82Zm7.27,0v1.82h1.82v-1.82h-1.82Zm9.09,0v1.82h1.82v-1.82h-1.82Z"/>
        </svg>
      );
    };
    
	