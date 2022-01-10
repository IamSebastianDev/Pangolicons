
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
          className={['pangolicons pangolicons-gear', className].join(" ")}
        >
          <circle  cx="12" cy="12" r="3.33"/><path  d="M13.39,3.05l.45,1.55a1.45,1.45,0,0,0,2.09.86l1.41-.78a1.46,1.46,0,0,1,2,2l-.78,1.41a1.45,1.45,0,0,0,.86,2.09l1.55.45a1.45,1.45,0,0,1,0,2.78l-1.55.45a1.45,1.45,0,0,0-.86,2.09l.78,1.41a1.46,1.46,0,0,1-2,2l-1.41-.78a1.45,1.45,0,0,0-2.09.86L13.39,21a1.45,1.45,0,0,1-2.78,0l-.45-1.55a1.45,1.45,0,0,0-2.09-.86l-1.41.78a1.46,1.46,0,0,1-2-2l.78-1.41a1.45,1.45,0,0,0-.86-2.09l-1.55-.45a1.45,1.45,0,0,1,0-2.78l1.55-.45a1.45,1.45,0,0,0,.86-2.09L4.68,6.66a1.46,1.46,0,0,1,2-2l1.41.78a1.45,1.45,0,0,0,2.09-.86l.45-1.55A1.45,1.45,0,0,1,13.39,3.05Z"/>
        </svg>
      );
    };
    
	