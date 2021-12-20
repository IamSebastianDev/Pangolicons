
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
          class="pangolicons pangolicons-sidebar {className}"
        >
          <rect  x="2" y="3.25" width="20" height="17.5" rx="1.4"/><line  x1="9.5" y1="20.75" x2="9.5" y2="3.25"/>
        </svg>
      );
    };
    
	