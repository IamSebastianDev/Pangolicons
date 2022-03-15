
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
          className={['pangolicons pangolicons-bookOpen', className].join(" ")}
        >
          <path  d="M12,6.31c0-4.99,9.98-4.28,9.98-4.28v15.69s-9.98-.71-9.98,4.28M2.02,2.04v15.69s9.98-.71,9.98,4.28V6.31C12,1.32,2.02,2.04,2.02,2.04Z"/>
        </svg>
      );
    };
    
	