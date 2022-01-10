
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
          className={['pangolicons pangolicons-facebook', className].join(" ")}
        >
          <path  d="M13.79,22V13.62c0-.18.05-.22.22-.21h2.52c.07,0,.17.06.19-.09.08-.54.17-1.08.25-1.63l.27-1.77c0-.22,0-.2-.16-.19H14c-.18,0-.24,0-.23-.23,0-.76,0-1.53,0-2.29a1.7,1.7,0,0,1,1.78-1.77c.56,0,1.13,0,1.69,0,.11,0,.17,0,.17-.14,0-1,0-1.94,0-2.9,0-.11,0-.13-.14-.15A14.52,14.52,0,0,0,15.11,2a6,6,0,0,0-2.69.38,4,4,0,0,0-2.26,2.32,6.9,6.9,0,0,0-.4,2.54q0,1.13,0,2.25c0,.17,0,.22-.22.22H6.79c-.17,0-.22,0-.22.22,0,1.08,0,2.17,0,3.25,0,.18,0,.23.22.23H9.51c.2,0,.25,0,.25.24v6.78c0,.53,0,1.05,0,1.57Z"/>
        </svg>
      );
    };
    
	