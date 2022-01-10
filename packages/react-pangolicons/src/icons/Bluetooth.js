
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
          className={['pangolicons pangolicons-bluetooth', className].join(" ")}
        >
          <polygon  points="11.27 22 11.27 12 11.27 2 19.21 7 11.27 12 19.21 17 11.27 22"/><polyline  points="5.77 15.38 11.27 12 19.21 7"/><polyline  points="5.77 8.25 11.27 12 19.21 17"/>
        </svg>
      );
    };
    
	