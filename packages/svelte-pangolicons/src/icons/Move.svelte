
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
			class="pangolicons pangolicons-move {className}"
			{ ...$$restProps }
		>
			<path  d="M19.35,9.35l2.65,2.65-2.65,2.65M14.65,4.65l-2.65-2.65-2.65,2.65m0,14.71l2.65,2.65,2.65-2.65M4.65,9.35l-2.65,2.65,2.65,2.65m7.35,7.35V2M2,12H22"/>
		</svg>
	