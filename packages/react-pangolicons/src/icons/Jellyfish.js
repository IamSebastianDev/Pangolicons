
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
          className={['pangolicons pangolicons-jellyfish', className].join(" ")}
        >
          <path  d="M4.94,9.06c0-3.9,3.16-7.06,7.06-7.06s7.06,3.16,7.06,7.06H4.94Zm5.06,12.94s2.13-2.35,1.56-4.71,.57-4.71,.57-4.71m3.38,0s1.78,2.35,1.15,4.71,1.72,4.71,1.72,4.71M7.76,12.5s-2.13,2.35-1.56,4.71c.57,2.35-.57,4.71-.57,4.71"/>
        </svg>
      );
    };
    
	