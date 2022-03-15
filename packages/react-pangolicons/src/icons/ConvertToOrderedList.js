
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
          className={['pangolicons pangolicons-convertToOrderedList', className].join(" ")}
        >
          <path  d="M8.67,11.84h13.33M2,5.18H22m-13.33,13.33h13.33M4.12,13.41v-3.12l-1.25,1.04m.62,7.19c.64,0,1.03-.35,1.03-.78s-.52-.78-1.16-.78m.09,3.12c.64,0,1.16-.35,1.16-.78s-.52-.78-1.16-.78"/>
        </svg>
      );
    };
    
	