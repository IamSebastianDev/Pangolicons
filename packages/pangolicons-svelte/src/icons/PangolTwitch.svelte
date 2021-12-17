
		<script>
			let className = '';
			let size = '24';
			let strokeWidth = '1.5';

			export let attributes = {};
			$: ({ className, size, strokeWidth } = attributes);
		</script>

		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="{size}"
			height="{size}"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			stroke-width="{strokeWidth}"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="pangolicons pangolicons-twitch {className}"
		>
			<g id="Twitch"><path  d="M8.09,20.5V17.41H4.17A.43.43,0,0,1,3.74,17v-13a.43.43,0,0,1,.43-.43H19.83a.43.43,0,0,1,.43.43V13.5a.46.46,0,0,1-.13.31l-3.48,3.47a.39.39,0,0,1-.3.13h-5Z"/></g><line  x1="14.61" y1="7.3" x2="14.61" y2="12.74"/><line  x1="9.39" y1="7.3" x2="9.39" y2="12.74"/>
		</svg>
	