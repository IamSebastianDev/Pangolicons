
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
			class="pangolicons pangolicons-eyeStriked {className}"
			{ ...$$restProps }
		>
			<path  d="M13.82,18.29c-.59,.12-1.2,.18-1.82,.18-5.52,0-10-5.18-10-6.47,0-.61,1-2.1,2.65-3.49m14.31,7.3c1.88-1.48,3.04-3.15,3.04-3.81,0-1.29-4.48-6.47-10-6.47-.53,0-1.04,.05-1.55,.13m1.55,3.4c-1.62,0-2.94,1.32-2.94,2.94s1.32,2.94,2.94,2.94,2.94-1.32,2.94-2.94-1.32-2.94-2.94-2.94ZM4.65,3.67l14.71,16.67"/>
		</svg>
	