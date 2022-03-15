
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
			class="pangolicons pangolicons-folder2 {className}"
			{ ...$$restProps }
		>
			<path  d="M22,19.65H2V4.35H7.91l2.91,4.71h11.18v10.59Zm0-13.53v-.43c0-.73-.6-1.33-1.33-1.33H12"/>
		</svg>
	