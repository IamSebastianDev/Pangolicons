
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
			class="pangolicons pangolicons-chevronUpDown {className}"
			{ ...$$restProps }
		>
			<path  d="M17.76,14.24l-5.76,5.76-5.76-5.76m11.52-4.48l-5.76-5.76-5.76,5.76"/>
		</svg>
	