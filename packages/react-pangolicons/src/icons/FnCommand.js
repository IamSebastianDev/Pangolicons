
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
          className="pangolicons pangolicons-fnCommand {className}"
        >
          <rect  x="2" y="2" width="20" height="20" rx="1.5"/><path  d="M13.76,7.88a2.36,2.36,0,1,1,2.36,2.36H7.88a2.36,2.36,0,1,1,2.36-2.36v8.24a2.36,2.36,0,1,1-2.36-2.36h8.24a2.36,2.36,0,1,1-2.36,2.36Z"/>
        </svg>
      );
    };
    
	