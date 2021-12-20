
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
          stroke-width={strokeWidth}
          stroke-linecap={linecap}
          stroke-linejoin={linejoin}
          class="pangolicons pangolicons-snpachat {className}"
        >
          <g id="PRIMARY_-_GHOST" data-name="PRIMARY - GHOST"><path  d="M21.71,17.37c-3.5-1.7-4.06-4.32-4.09-4.52a.62.62,0,0,1,.2-.66c.25-.23,1.36-.92,1.67-1.13.51-.36.73-.71.57-1.15a.7.7,0,0,0-.7-.42l-.27,0c-.56.12-1.11.41-1.42.48l-.12,0c-.17,0-.23-.08-.21-.28a21,21,0,0,0,0-2.92,4.65,4.65,0,0,0-1.21-3A5.42,5.42,0,0,0,12,2.12,5.42,5.42,0,0,0,7.85,3.84a4.64,4.64,0,0,0-1.21,3,21.13,21.13,0,0,0,0,2.93c0,.19,0,.27-.21.27H6.33c-.31-.08-.86-.36-1.42-.48l-.27,0a.69.69,0,0,0-.7.41c-.16.44.06.8.57,1.15.31.22,1.42.91,1.67,1.14a.62.62,0,0,1,.2.66c0,.2-.59,2.82-4.09,4.51-.21.1-.56.31.06.65,1,.54,1.61.48,2.11.8s.17.87.48,1.08,1.5,0,2.95.46c1.22.4,2,1.53,4.11,1.53s2.91-1.14,4.11-1.53c1.44-.48,2.57-.2,2.95-.46s.06-.8.48-1.08,1.15-.26,2.11-.8C22.27,17.68,21.92,17.47,21.71,17.37Z"/></g>
        </svg>
      );
    };
    
	