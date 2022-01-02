
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
          className="pangolicons pangolicons-horizontalMore {className}"
        >
          <rect  x="2" y="11.09" width="1.82" height="1.82" transform="translate(-9.09 14.91) rotate(-90)"/><rect  x="11.09" y="11.09" width="1.82" height="1.82" transform="translate(0 24) rotate(-90)"/><rect  x="20.18" y="11.09" width="1.82" height="1.82" transform="translate(9.09 33.09) rotate(-90)"/>
        </svg>
      );
    };
    
	