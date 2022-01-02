
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
          className="pangolicons pangolicons-fullscreenEnter {className}"
        >
          <polyline  points="2 6 2 2 6 2"/><polyline  points="22 6 22 2 18 2"/><polyline  points="2 18 2 22 6 22"/><polyline  points="22 18 22 22 18 22"/>
        </svg>
      );
    };
    
	