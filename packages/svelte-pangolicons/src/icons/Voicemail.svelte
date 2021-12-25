
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
			class="pangolicons pangolicons-voicemail {className}"
		>
			<circle  cx="5.75" cy="12" r="3.75"/><circle  cx="18.25" cy="12" r="3.75"/><line  x1="5.75" y1="15.75" x2="18.25" y2="15.75"/>
		</svg>
	