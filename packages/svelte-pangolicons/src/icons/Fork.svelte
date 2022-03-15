
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
			class="pangolicons pangolicons-fork {className}"
			{ ...$$restProps }
		>
			<path  d="M18.74,5.26l-4.36,4.36L2,22M22,8.32l-3.24,3.24s-2.68,2.68-5.51-.81m0,0c-3.48-2.83-.81-5.51-.81-5.51l3.24-3.24"/>
		</svg>
	