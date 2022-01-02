
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
          className="pangolicons pangolicons-volumeLow {className}"
        >
          <rect  x="6.62" y="8.15" width="4.62" height="7.69"/><polygon  points="17.39 2 11.23 8.15 11.23 15.85 17.39 22 17.39 2"/>
        </svg>
      );
    };
    
	