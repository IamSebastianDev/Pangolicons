
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
			class="pangolicons pangolicons-folderPlus {className}"
		>
			<polygon  points="22 19.65 2 19.65 2 4.35 9.09 4.35 12 6.71 22 6.71 22 19.65"/><line  x1="9.65" y1="13.18" x2="14.35" y2="13.18"/><line  x1="12" y1="15.53" x2="12" y2="10.82"/>
		</svg>
	