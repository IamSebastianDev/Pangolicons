
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
          className={['pangolicons pangolicons-server', className].join(" ")}
        >
          <path  d="M21,20.88H3c-.55,0-1-.45-1-1v-4.67c0-.55,.45-1,1-1H21c.55,0,1,.45,1,1v4.67c0,.55-.45,1-1,1Zm-14.34-3.67c-.18,0-.33,.15-.33,.33s.15,.33,.33,.33,.33-.15,.33-.33-.15-.33-.33-.33Zm14.34-7.42H3c-.55,0-1-.45-1-1V4.12c0-.55,.45-1,1-1H21c.55,0,1,.45,1,1v4.67c0,.55-.45,1-1,1Zm-3.83-3.67c-.18,0-.33,.15-.33,.33s.15,.33,.33,.33,.33-.15,.33-.33-.15-.33-.33-.33Z"/>
        </svg>
      );
    };
    
	