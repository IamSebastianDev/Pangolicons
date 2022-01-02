
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
          className="pangolicons pangolicons-bluetoothConnected {className}"
        >
          <polygon  points="11.79 22 11.79 12 11.79 2 19.74 7 11.79 12 19.74 17 11.79 22"/><polyline  points="6.29 15.38 11.79 12 19.74 7"/><polyline  points="6.29 8.25 11.79 12 19.74 17"/><line  x1="5.49" y1="12" x2="2" y2="12"/><line  x1="22" y1="12" x2="18.51" y2="12"/>
        </svg>
      );
    };
    
	