
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
			class="pangolicons pangolicons-tablet {className}"
		>
			<path  d="M18.18,22H5.82a1.94,1.94,0,0,1-1.94-1.95V4A1.94,1.94,0,0,1,5.82,2H18.18a1.94,1.94,0,0,1,1.94,2v16.1A1.94,1.94,0,0,1,18.18,22ZM12,17.31c-.22,0-.41.14-.41.31a.42.42,0,0,0,.82,0C12.41,17.45,12.22,17.31,12,17.31Z"/>
		</svg>
	