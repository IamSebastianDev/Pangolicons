
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
          className={['pangolicons pangolicons-shield', className].join(" ")}
        >
          <path  d="M9.97,21.05C5.09,14.77,3.59,8.81,3.13,5.75c-.18-1.2,.71-2.31,2.01-2.55l6.36-1.16c.33-.06,.66-.06,.99,0l6.36,1.16c1.3,.24,2.19,1.35,2.01,2.55-.46,3.06-1.96,9.02-6.83,15.3-.98,1.27-3.08,1.27-4.07,0Z"/>
        </svg>
      );
    };
    
	