
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
          className="pangolicons pangolicons-tablet {className}"
        >
          <path  d="M18.18,22H5.82a1.94,1.94,0,0,1-1.94-1.95V4A1.94,1.94,0,0,1,5.82,2H18.18a1.94,1.94,0,0,1,1.94,2v16.1A1.94,1.94,0,0,1,18.18,22ZM12,17.31c-.22,0-.41.14-.41.31a.42.42,0,0,0,.82,0C12.41,17.45,12.22,17.31,12,17.31Z"/>
        </svg>
      );
    };
    
	