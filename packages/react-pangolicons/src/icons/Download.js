
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
          className={['pangolicons pangolicons-download', className].join(" ")}
        >
          <path  d="M12,3.18v12.94l4.2-4.2-4.2,4.2-4.2-4.2m-5.8,4.2v2.94c0,.97,.79,1.76,1.76,1.76H20.24c.97,0,1.76-.79,1.76-1.76v-2.94"/>
        </svg>
      );
    };
    
	