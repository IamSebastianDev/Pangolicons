
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
          className="pangolicons pangolicons-layers {className}"
        >
          <polyline  points="2.14 16.34 12.07 21.31 22 16.34"/><polyline  points="2 12 11.93 16.96 21.86 12"/><polygon  points="21.86 7.66 11.93 2.69 2 7.66 11.93 12.62 21.86 7.66"/>
        </svg>
      );
    };
    
	