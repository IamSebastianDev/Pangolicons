
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
          className={['pangolicons pangolicons-folderPlus', className].join(" ")}
        >
          <path  d="M22,19.65H2V4.35h7.09l2.91,2.35h10v12.94Zm-12.35-6.47h4.71m-2.35,2.35v-4.71"/>
        </svg>
      );
    };
    
	