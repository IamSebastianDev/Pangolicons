
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
          class="pangolicons pangolicons-fnReturn {className}"
        >
          <rect  x="2" y="2" width="20" height="20" rx="1.5"/><polyline  points="9.96 17.29 6.71 14.02 9.96 10.74"/><polyline  points="6.71 14.02 17.29 14.02 17.29 6.71 11.56 6.71"/>
        </svg>
      );
    };
    
	