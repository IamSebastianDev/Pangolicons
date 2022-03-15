
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
			class="pangolicons pangolicons-bold {className}"
			{ ...$$restProps }
		>
			<path  d="M5.08,2.71c0-.39,.31-.71,.69-.71h7.83c2.35,0,4.26,2.24,4.26,5s-1.91,5-4.26,5H5.08V2.71Zm0,18.58c0,.39,.31,.71,.69,.71H14.66c2.35,0,4.26-2.24,4.26-5s-1.91-5-4.26-5H5.76c-.38,0-.69,.32-.69,.71v8.58Z"/>
		</svg>
	