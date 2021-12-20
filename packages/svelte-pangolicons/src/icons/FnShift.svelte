
		<script>
			let className = '';
			let size = '24';
			let strokeWidth = '1.5';
			let color = "currentColor";
			let linejoin = "round";
			let linecap = "round";

			export let attributes = { className, size, strokeWidth, color, linejoin, linecap };
			$: ({ className, size, strokeWidth, color, linejoin, linecap } = attributes);
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
			class="pangolicons pangolicons-fnShift {className}"
		>
			<rect  x="2" y="2" width="20" height="20" rx="1.5"/><polygon  points="17.88 12.14 12 7.29 6.12 12.14 9.45 12.14 9.45 16.71 14.55 16.71 14.55 12.14 17.88 12.14"/>
		</svg>
	