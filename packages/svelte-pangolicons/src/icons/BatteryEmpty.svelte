
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
			class="pangolicons pangolicons-batteryEmpty {className}"
			{ ...$$restProps }
		>
			<path  d="M16.65,16.71H3.82c-1,0-1.82-.82-1.82-1.82v-5.78c0-1,.82-1.82,1.82-1.82h12.84c1,0,1.82,.82,1.82,1.82v5.78c0,1-.82,1.82-1.82,1.82Zm5.35-5.88v2.35"/>
		</svg>
	