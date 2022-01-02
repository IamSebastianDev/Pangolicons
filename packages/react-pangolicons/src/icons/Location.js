
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
          className="pangolicons pangolicons-location {className}"
        >
          <circle  cx="12" cy="8.96" r="2.61"/><path  d="M17.79,13c2.85-4.44.11-10.54-5.15-11-.21,0-.42,0-.64,0s-.43,0-.64,0c-5.26.42-8,6.52-5.15,11L12,22Z"/>
        </svg>
      );
    };
    
	