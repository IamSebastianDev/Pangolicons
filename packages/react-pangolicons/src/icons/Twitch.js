
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
          className={['pangolicons pangolicons-twitch', className].join(" ")}
        >
          <g id="Twitch"><path  d="M7.4,22V18.37H2.79a.51.51,0,0,1-.51-.51V2.51A.51.51,0,0,1,2.79,2H21.21a.51.51,0,0,1,.51.51V13.77a.51.51,0,0,1-.15.35l-4.1,4.1a.51.51,0,0,1-.35.15H11.19Z"/></g><line  x1="15.07" y1="6.47" x2="15.07" y2="12.87"/><line  x1="8.93" y1="6.47" x2="8.93" y2="12.87"/>
        </svg>
      );
    };
    
	