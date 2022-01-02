
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
          className="pangolicons pangolicons-cloudMoon {className}"
        >
          <path  d="M4.41,20.28h9.26a3.59,3.59,0,1,0-1.46-6.87,5.38,5.38,0,1,0-7.8,6.87Z"/><path  d="M12,8.87a5.07,5.07,0,0,1,.17-1.44"/><path  d="M12.18,7.43a5.12,5.12,0,0,1,4.2-3.71,3.94,3.94,0,0,0-.36.45,4.31,4.31,0,0,0,6,6,5.08,5.08,0,0,1-2.46,3.05"/>
        </svg>
      );
    };
    
	