
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
			class="pangolicons pangolicons-volumeHigh {className}"
		>
			<rect  x="5" y="9.5" width="3" height="5"/><polygon  points="12 5.5 8 9.5 8 14.5 12 18.5 12 5.5"/><path  d="M15,9a6.38,6.38,0,0,1,0,6"/><path  d="M18,8a8.52,8.52,0,0,1,0,8"/>
		</svg>
	