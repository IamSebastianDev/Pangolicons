
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
			class="pangolicons pangolicons-zoomOut {className}"
			{ ...$$restProps }
		>
			<path  d="M19.91,4.09c2.79,2.79,2.79,7.31,0,10.1-2.79,2.79-7.31,2.79-10.1,0s-2.79-7.31,0-10.1,7.31-2.79,10.1,0ZM9.35,14.65l-7.35,7.35,7.35-7.35Zm2.65-5.51h6.2"/>
		</svg>
	