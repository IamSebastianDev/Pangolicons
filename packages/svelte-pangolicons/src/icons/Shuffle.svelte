
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
			class="pangolicons pangolicons-shuffle {className}"
			{ ...$$restProps }
		>
			<path  d="M2,22L22,2m-6.47,20h6.47v-6.47m0-7.06V2h-6.47m-6.32,7.21L2,2M22,22l-7.05-7.05"/>
		</svg>
	