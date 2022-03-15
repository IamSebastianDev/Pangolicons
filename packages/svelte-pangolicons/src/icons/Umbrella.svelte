
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
			class="pangolicons pangolicons-umbrella {className}"
			{ ...$$restProps }
		>
			<path  d="M2.59,11.41C2.59,6.21,6.8,2,12,2s9.41,4.21,9.41,9.41H2.59Zm9.41,0v8.47c0,1.17,1.05,2.12,2.35,2.12s2.35-.95,2.35-2.12"/>
		</svg>
	