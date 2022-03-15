
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
			class="pangolicons pangolicons-verticalMore {className}"
			{ ...$$restProps }
		>
			<path  d="M12.91,3.82h-1.82v-1.82h1.82v1.82Zm0,7.27h-1.82v1.82h1.82v-1.82Zm0,9.09h-1.82v1.82h1.82v-1.82Z"/>
		</svg>
	