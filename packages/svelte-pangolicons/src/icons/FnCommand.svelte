
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
			class="pangolicons pangolicons-fnCommand {className}"
		>
			<rect  x="2" y="2" width="20" height="20" rx="1.5"/><path  d="M13.76,7.88a2.36,2.36,0,1,1,2.36,2.36H7.88a2.36,2.36,0,1,1,2.36-2.36v8.24a2.36,2.36,0,1,1-2.36-2.36h8.24a2.36,2.36,0,1,1-2.36,2.36Z"/>
		</svg>
	