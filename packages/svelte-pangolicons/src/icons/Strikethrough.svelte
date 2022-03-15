
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
			class="pangolicons pangolicons-strikethrough {className}"
			{ ...$$restProps }
		>
			<path  d="M10.46,11.66c-.69-.31-3.85-2.03-3.85-4.75s2.41-4.92,5.38-4.92,5.38,2.2,5.38,4.92M2.77,11.83H21.23m-14.19,5.25c0,2.72,2.41,4.92,5.38,4.92s5.38-2.2,5.38-4.92-3.16-4.43-3.85-4.75"/>
		</svg>
	