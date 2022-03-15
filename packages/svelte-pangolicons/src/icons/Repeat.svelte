
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
			class="pangolicons pangolicons-repeat {className}"
			{ ...$$restProps }
		>
			<path  d="M3.87,11.15h0c0-2.95,2.39-5.35,5.35-5.35h10.91m-3.8,3.8l3.8-3.8-3.8-3.8M3.87,18.2H14.78c2.95,0,5.35-2.39,5.35-5.35h0m-12.45,1.55l-3.8,3.8,3.8,3.8"/>
		</svg>
	