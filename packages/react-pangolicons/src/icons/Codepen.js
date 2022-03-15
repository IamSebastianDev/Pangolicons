
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
          className={['pangolicons pangolicons-codepen', className].join(" ")}
        >
          <path  d="M12,2l10,6.67-10,6.67L2,8.67,12,2ZM2,15.33l10,6.67,10-6.67-10-6.67L2,15.33Zm0-6.67v6.67m10,6.67v-6.67m10-6.67v6.67M12,2v6.67"/>
        </svg>
      );
    };
    
	