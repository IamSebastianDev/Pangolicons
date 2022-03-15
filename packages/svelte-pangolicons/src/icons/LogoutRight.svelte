
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
			class="pangolicons pangolicons-logoutRight {className}"
			{ ...$$restProps }
		>
			<path  d="M14.06,2h3.66c1.74,0,3.17,1.28,3.17,2.85v14.29c0,1.57-1.43,2.85-3.17,2.85h-3.66m.16-10H3.11l2.78-4.44-2.78,4.44,2.78,4.44"/>
		</svg>
	