
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
			class="pangolicons pangolicons-barChart {className}"
		>
			<line  x1="4.5" y1="2" x2="4.5" y2="22"/><line  x1="19.5" y1="8.25" x2="19.5" y2="22"/><line  x1="14.5" y1="22" x2="14.5" y2="12.22"/><line  x1="9.5" y1="22" x2="9.5" y2="4.7"/>
		</svg>
	