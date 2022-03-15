
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
          className={['pangolicons pangolicons-star', className].join(" ")}
        >
          <path  d="M12,2.49l3.09,6.26,6.91,1-5,4.87,1.18,6.88-6.18-3.25-6.18,3.25,1.18-6.88L2,9.75l6.91-1,3.09-6.26Z"/>
        </svg>
      );
    };
    
	