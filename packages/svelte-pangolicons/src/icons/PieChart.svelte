
		<script>
			export let className = '';
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
			class="pangolicons pangolicons-pieChart {className}"
		>
			<path  d="M22,12A10,10,0,0,0,12,2"/><path  d="M9.16,2.41A10,10,0,1,0,21.55,15"/><polyline  points="12 2 12 12 22 12"/>
		</svg>
	