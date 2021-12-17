
		<script>
			let className = '';
			let size = '24';
			let strokeWidth = '1.5';

			export let attributes = { className, size, strokeWidth };
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
			class="pangolicons pangolicons-volumeMute {className}"
		>
			<rect  x="4.94" y="9.5" width="3" height="5"/><polygon  points="11.94 5.5 7.94 9.5 7.94 14.5 11.94 18.5 11.94 5.5"/><line  x1="14.82" y1="14.12" x2="19.06" y2="9.88"/><line  x1="14.82" y1="9.88" x2="19.06" y2="14.12"/>
		</svg>
	