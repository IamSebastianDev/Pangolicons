
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
			class="pangolicons pangolicons-snpachat {className}"
		>
			<g id="PRIMARY_-_GHOST" data-name="PRIMARY - GHOST"><path  d="M20.26,16.56c-3-1.44-3.46-3.67-3.48-3.83a.52.52,0,0,1,.17-.57c.21-.19,1.15-.78,1.42-1,.43-.3.62-.61.48-1a.59.59,0,0,0-.59-.35l-.24,0c-.47.11-.94.35-1.2.41h-.1c-.14,0-.2-.06-.18-.23a17.94,17.94,0,0,0,0-2.49,4,4,0,0,0-1-2.52A4.57,4.57,0,0,0,12,3.6,4.58,4.58,0,0,0,8.47,5.07a3.92,3.92,0,0,0-1,2.52,17.94,17.94,0,0,0,0,2.49c0,.16,0,.23-.18.23h-.1c-.26-.07-.73-.31-1.2-.41a2,2,0,0,0-.24,0,.59.59,0,0,0-.59.36c-.14.37,0,.67.48,1,.27.18,1.21.76,1.42,1a.52.52,0,0,1,.17.56c0,.17-.5,2.4-3.48,3.84-.17.08-.47.26.06.55.82.45,1.37.41,1.79.68s.15.73.41.92,1.28,0,2.51.39c1,.34,1.66,1.3,3.49,1.3s2.48-1,3.49-1.3c1.23-.41,2.19-.17,2.51-.39s.05-.69.41-.92,1-.23,1.8-.68C20.73,16.82,20.43,16.65,20.26,16.56Z"/></g>
		</svg>
	