
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
          class="pangolicons pangolicons-chevronUpDown {className}"
        >
          <polyline  points="6.24 14.24 12 20 17.76 14.24"/><polyline  points="6.24 9.76 12 4 17.76 9.76"/>
        </svg>
      );
    };
    
	