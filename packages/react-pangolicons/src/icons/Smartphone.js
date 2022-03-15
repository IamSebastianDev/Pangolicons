
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
          className={['pangolicons pangolicons-smartphone', className].join(" ")}
        >
          <path  d="M16.3,22H7.7c-1.08,0-1.95-.87-1.95-1.95V3.95c0-1.08,.87-1.95,1.95-1.95h8.6c1.08,0,1.95,.87,1.95,1.95V20.05c0,1.08-.87,1.95-1.95,1.95Zm-4.3-4.69c-.17,0-.31,.14-.31,.31s.14,.31,.31,.31,.31-.14,.31-.31-.14-.31-.31-.31Z"/>
        </svg>
      );
    };
    
	