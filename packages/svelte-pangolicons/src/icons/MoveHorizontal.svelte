
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
			class="pangolicons pangolicons-moveHorizontal {className}"
			{ ...$$restProps }
		>
			<path  d="M19.35,9.35l2.65,2.65-2.65,2.65M4.65,9.35l-2.65,2.65,2.65,2.65m-2.65-2.65H22"/>
		</svg>
	