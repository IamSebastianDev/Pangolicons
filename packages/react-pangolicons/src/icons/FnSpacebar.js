
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
          class="pangolicons pangolicons-fnSpacebar {className}"
        >
          <rect  x="2" y="2" width="20" height="20" rx="1.5"/><polyline  points="17.88 13.18 17.88 15.53 6.12 15.53 6.12 13.18"/>
        </svg>
      );
    };
    
	