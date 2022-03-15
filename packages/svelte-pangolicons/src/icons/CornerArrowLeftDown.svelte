
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
			class="pangolicons pangolicons-cornerArrowLeftDown {className}"
			{ ...$$restProps }
		>
			<path  d="M2,12.95l6.44,6.44,6.44-6.44-6.44,6.44V8.21c0-1.99,1.61-3.6,3.6-3.6h9.96"/>
		</svg>
	