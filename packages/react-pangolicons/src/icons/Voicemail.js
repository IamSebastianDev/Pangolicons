
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
          className="pangolicons pangolicons-voicemail {className}"
        >
          <circle  cx="5.75" cy="12" r="3.75"/><circle  cx="18.25" cy="12" r="3.75"/><line  x1="5.75" y1="15.75" x2="18.25" y2="15.75"/>
        </svg>
      );
    };
    
	