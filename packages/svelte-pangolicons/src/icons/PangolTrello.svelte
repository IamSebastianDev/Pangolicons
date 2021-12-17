
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
			class="pangolicons pangolicons-trello {className}"
		>
			<rect  x="5.25" y="3.5" width="13.75" height="17"/><rect  x="8" y="6" width="3" height="12"/><rect  x="13.5" y="6" width="3" height="6"/>
		</svg>
	