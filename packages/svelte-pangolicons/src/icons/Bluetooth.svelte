
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
			class="pangolicons pangolicons-bluetooth {className}"
			{ ...$$restProps }
		>
			<path  d="M11.27,22V2l7.94,5-7.94,5,7.94,5-7.94,5Zm-5.5-6.62l5.5-3.38,7.94-5m-13.44,1.25l5.5,3.75,7.94,5"/>
		</svg>
	