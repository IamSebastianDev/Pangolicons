
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
          className="pangolicons pangolicons-bookOpen {className}"
        >
          <path  d="M12,6.31C12,1.32,22,2,22,2V17.72S12,17,12,22M2,2V17.72S12,17,12,22V6.31C12,1.32,2,2,2,2Z"/>
        </svg>
      );
    };
    
	