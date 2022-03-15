
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
			class="pangolicons pangolicons-envelope {className}"
			{ ...$$restProps }
		>
			<path  d="M20.1,20.12H3.9c-1.04,0-1.9-.85-1.9-1.9V5.77c0-1.04,.85-1.9,1.9-1.9H20.1c1.04,0,1.9,.85,1.9,1.9v12.45c0,1.04-.85,1.9-1.9,1.9ZM3.25,5.12l8.75,7.5,8.75-7.5"/>
		</svg>
	