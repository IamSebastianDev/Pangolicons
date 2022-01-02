
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
          className="pangolicons pangolicons-convertToOrderedList {className}"
        >
          <line  x1="8.67" y1="11.84" x2="22" y2="11.84"/><line  x1="2" y1="5.18" x2="22" y2="5.18"/><line  x1="8.67" y1="18.51" x2="22" y2="18.51"/><polyline  points="2.88 11.32 4.13 10.28 4.13 13.41"/><path  d="M3.5,18.51c.64,0,1-.35,1-.78S4,17,3.38,17"/><path  d="M3.47,20.07c.64,0,1.15-.35,1.15-.78s-.51-.78-1.15-.78"/>
        </svg>
      );
    };
    
	