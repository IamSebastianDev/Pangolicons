
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
          className={['pangolicons pangolicons-instagram', className].join(" ")}
        >
          <rect  x="2" y="2" width="20" height="20" rx="3.73"/><circle  cx="12" cy="12" r="4.44"/><circle  cx="18.11" cy="5.89" r="0.56"/>
        </svg>
      );
    };
    
	