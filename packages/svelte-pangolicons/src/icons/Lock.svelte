
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
			class="pangolicons pangolicons-lock {className}"
		>
			<path  d="M18.47,21.93H5.53a2,2,0,0,1-2-2V13.14a2,2,0,0,1,2-2H18.47a2,2,0,0,1,2,2v6.77A2,2,0,0,1,18.47,21.93ZM17.1,10.76c0-3.7-2.25-6.69-5-6.69s-5,3-5,6.69m9.45,4.79a.64.64,0,1,0-.64-.64A.63.63,0,0,0,16.47,15.55Z"/>
		</svg>
	