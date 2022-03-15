
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
          className={['pangolicons pangolicons-mug', className].join(" ")}
        >
          <path  d="M17.19,2V15.75c0,3.44-2.25,6.25-4.99,6.25H7.37c-2.75,0-4.99-2.81-4.99-6.25V2m14.81,12.24c0,1.03,.84,1.87,1.87,1.87h.69c1.03,0,1.87-.84,1.87-1.87v-5.51c0-1.03-.84-1.87-1.87-1.87h-.69c-1.03,0-1.87,.84-1.87,1.87"/>
        </svg>
      );
    };
    
	