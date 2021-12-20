
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
			class="pangolicons pangolicons-unlock {className}"
		>
			<path  d="M18.34,22H5.66a2,2,0,0,1-2-2V13.39a2,2,0,0,1,2-2H18.34a2,2,0,0,1,2,2V20A2,2,0,0,1,18.34,22ZM18,5.34A6.05,6.05,0,1,0,7.19,10.77"/><circle  cx="16.38" cy="15.12" r="0.63"/>
		</svg>
	