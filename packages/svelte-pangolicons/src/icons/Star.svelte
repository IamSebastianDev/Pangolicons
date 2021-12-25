
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
			class="pangolicons pangolicons-star {className}"
		>
			<polygon  points="12 2.49 15.09 8.75 22 9.76 17 14.63 18.18 21.51 12 18.26 5.82 21.51 7 14.63 2 9.76 8.91 8.75 12 2.49"/>
		</svg>
	