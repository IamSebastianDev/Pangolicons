
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
			class="pangolicons pangolicons-ghost {className}"
		>
			<path  d="M12,20.7,14.71,22l2.5-1.25L19.5,22V9.5a7.5,7.5,0,0,0-15,0V22l2.29-1.25L9.29,22Z"/><circle  cx="14.33" cy="8.02" r="0.29"/><circle  cx="9.63" cy="8.02" r="0.29"/>
		</svg>
	