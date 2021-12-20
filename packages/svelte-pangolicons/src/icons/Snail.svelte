
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
			class="pangolicons pangolicons-snail {className}"
		>
			<path  d="M2,18.87H15.87a6.55,6.55,0,0,0,5-2.22A4.3,4.3,0,0,0,22,13.87a6.78,6.78,0,0,0-.31-2.29,1.08,1.08,0,0,0-1.7-.44h0a1.09,1.09,0,0,0,.2,1.83l1.81.9"/><path  d="M13.75,15c1.4-4.26-.52-8.38-3.56-9.49A6,6,0,0,0,3.58,7.35C1.74,9.79,2.11,13.84,4,14.79c2.1,1,5.47-.29,5.47-2.79A2.74,2.74,0,0,0,7,9.5"/>
		</svg>
	