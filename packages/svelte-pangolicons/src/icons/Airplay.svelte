
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
			class="pangolicons pangolicons-airplay {className}"
		>
			<path  d="M3.74,16.06A1.74,1.74,0,0,1,2,14.32V4.05A1.74,1.74,0,0,1,3.74,2.31H20.26A1.74,1.74,0,0,1,22,4.05V14.32a1.74,1.74,0,0,1-1.74,1.74"/><polygon  points="12 14.19 5.5 21.69 18.5 21.69 12 14.19"/>
		</svg>
	