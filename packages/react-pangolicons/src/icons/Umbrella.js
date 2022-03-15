
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
          className={['pangolicons pangolicons-umbrella', className].join(" ")}
        >
          <path  d="M2.59,11.41C2.59,6.21,6.8,2,12,2s9.41,4.21,9.41,9.41H2.59Zm9.41,0v8.47c0,1.17,1.05,2.12,2.35,2.12s2.35-.95,2.35-2.12"/>
        </svg>
      );
    };
    
	