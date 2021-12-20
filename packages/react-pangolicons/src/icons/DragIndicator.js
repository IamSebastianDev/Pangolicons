
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
          stroke-width={strokeWidth}
          stroke-linecap={linecap}
          stroke-linejoin={linejoin}
          class="pangolicons pangolicons-dragIndicator {className}"
        >
          <circle  cx="12" cy="2.91" r="0.91"/><circle  cx="21.09" cy="12" r="0.91"/><circle  cx="12" cy="21.09" r="0.91"/><circle  cx="2.91" cy="12" r="0.91"/>
        </svg>
      );
    };
    
	