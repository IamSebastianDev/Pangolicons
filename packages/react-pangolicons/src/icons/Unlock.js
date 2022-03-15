
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
          className={['pangolicons pangolicons-unlock', className].join(" ")}
        >
          <path  d="M18.34,22H5.66c-1.1,0-1.98-.89-1.98-1.98v-6.63c0-1.1,.89-1.98,1.98-1.98h12.68c1.1,0,1.98,.89,1.98,1.98v6.63c0,1.1-.89,1.98-1.98,1.98Zm-.33-16.66c-1.5-2.99-5.14-4.2-8.13-2.7-2.99,1.5-4.2,5.14-2.7,8.13m9.19,4.98c.35,0,.62-.28,.62-.62s-.28-.62-.62-.62-.62,.28-.62,.62,.28,.62,.62,.62Z"/>
        </svg>
      );
    };
    
	