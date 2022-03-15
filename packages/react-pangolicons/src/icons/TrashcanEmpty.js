
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
          className={['pangolicons pangolicons-trashcanEmpty', className].join(" ")}
        >
          <path  d="M18.87,5.99v13.7c0,1.27-1.04,2.31-2.31,2.31H7.44c-1.27,0-2.31-1.04-2.31-2.31V5.99m-1.15-.02H20.02m-4.35-.43c0-.76-.62-3.54-1.37-3.54h-4.58c-.76,0-1.37,2.78-1.37,3.54"/>
        </svg>
      );
    };
    
	