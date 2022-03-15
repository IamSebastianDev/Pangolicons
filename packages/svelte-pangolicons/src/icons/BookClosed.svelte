
		<script>
			let className = ''; 
			export {className as class}; 
			export let size = '24';
			export let strokeWidth = '1.5';
			export let color = "currentColor";
			export let linejoin = "round";
			export let linecap = "round";
		</script>

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
			class="pangolicons pangolicons-bookClosed {className}"
			{ ...$$restProps }
		>
			<path  d="M4.67,20V4c0-1.1,.9-2,2-2h12.67V22H6.67c-1.1,0-2-.9-2-2Zm14.67-3.33H7.33c-1.47,0-2.67,1.19-2.67,2.67"/>
		</svg>
	