
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
			class="pangolicons pangolicons-layoutMixed {className}"
		>
			<rect  x="2" y="2" width="20" height="20" rx="1.5"/><line  x1="12" y1="2" x2="12" y2="22"/><line  x1="2" y1="12" x2="12" y2="12"/>
		</svg>
	