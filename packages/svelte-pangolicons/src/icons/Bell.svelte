
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
			class="pangolicons pangolicons-bell {className}"
			{ ...$$restProps }
		>
			<path  d="M12,2c2.7,0,4.89,2.19,4.89,4.89,0,0-.13,9.77,4.12,10.96H2.99c4.25-1.19,4.12-10.96,4.12-10.96,0-2.7,2.19-4.89,4.89-4.89m-3.14,19.35s3.14,1.46,6.29,0"/>
		</svg>
	