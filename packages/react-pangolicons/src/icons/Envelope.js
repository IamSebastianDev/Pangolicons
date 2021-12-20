
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
          class="pangolicons pangolicons-envelope {className}"
        >
          <rect  x="2" y="3.88" width="20" height="16.25" rx="1.9"/><polyline  points="3.25 5.13 12 12.63 20.75 5.13"/>
        </svg>
      );
    };
    
	