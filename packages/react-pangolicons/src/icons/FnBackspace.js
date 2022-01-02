
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
          className="pangolicons pangolicons-fnBackspace {className}"
        >
          <rect  x="2" y="2" width="20" height="20" rx="1.5"/><polyline  points="8.62 8.34 5.74 12.46 8.62 16.57 17.5 16.57 17.5 8.34 8.62 8.34"/><line  x1="13.74" y1="11.51" x2="11.86" y2="13.4"/><line  x1="11.86" y1="11.51" x2="13.74" y2="13.4"/>
        </svg>
      );
    };
    
	