
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
			class="pangolicons pangolicons-list {className}"
			{ ...$$restProps }
		>
			<path  d="M6.29,12h15.71M6.29,4.86h15.71M6.29,19.14h15.71M2,12h.14m-.14-7.14h.14m-.14,14.29h.11"/>
		</svg>
	