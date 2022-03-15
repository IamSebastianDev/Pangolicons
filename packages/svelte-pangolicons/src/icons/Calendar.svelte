
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
			class="pangolicons pangolicons-calendar {className}"
			{ ...$$restProps }
		>
			<path  d="M20.6,20.97H3.4c-.77,0-1.4-.62-1.4-1.4V4.87c0-.77,.62-1.4,1.4-1.4H20.6c.77,0,1.4,.62,1.4,1.4v14.71c0,.77-.62,1.4-1.4,1.4ZM2,9.12H22M7,5.01V1.26m10,3.75V1.26"/>
		</svg>
	