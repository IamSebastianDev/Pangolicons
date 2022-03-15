
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
          className={['pangolicons pangolicons-sunSmall', className].join(" ")}
        >
          <path  d="M16.44,12c0,2.45-1.99,4.44-4.44,4.44s-4.44-1.99-4.44-4.44,1.99-4.44,4.44-4.44,4.44,1.99,4.44,4.44ZM12,2v2.22m10,7.78h-2.22m-7.78,10v-2.22M2,12h2.22m2.41-5.36l-1.3-1.3m13.33,0l-1.11,1.11m1.11,12.22l-1.11-1.11m-12.22,1.11l1.3-1.3"/>
        </svg>
      );
    };
    
	