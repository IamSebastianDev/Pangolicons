
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
			class="pangolicons pangolicons-convertToUnorderedList {className}"
			{ ...$$restProps }
		>
			<path  d="M8.67,12h13.33M2,5.33H22m-13.33,13.33h13.33M3.65,12h.02m-.02,6.67h.02"/>
		</svg>
	