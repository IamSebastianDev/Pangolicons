
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
			class="pangolicons pangolicons-bookmark {className}"
			{ ...$$restProps }
		>
			<path  d="M4,22V3.88c0-1.04,.84-1.88,1.88-1.88h12.25c1.04,0,1.88,.84,1.88,1.88V22m0,0l-8-5.13-8,5.13"/>
		</svg>
	