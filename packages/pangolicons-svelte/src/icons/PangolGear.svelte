
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
			class="pangolicons pangolicons-gear {className}"
		>
			<circle  cx="12" cy="12" r="3"/><path  d="M13.25,3.94l.41,1.4a1.31,1.31,0,0,0,1.88.78l1.27-.7a1.3,1.3,0,0,1,1.77,1.77l-.7,1.27a1.31,1.31,0,0,0,.78,1.88l1.4.41a1.3,1.3,0,0,1,0,2.5l-1.4.41a1.31,1.31,0,0,0-.78,1.88l.7,1.27a1.3,1.3,0,0,1-1.77,1.77l-1.27-.7a1.31,1.31,0,0,0-1.88.78l-.41,1.4a1.3,1.3,0,0,1-2.5,0l-.41-1.4a1.31,1.31,0,0,0-1.88-.78l-1.27.7a1.3,1.3,0,0,1-1.77-1.77l.7-1.27a1.31,1.31,0,0,0-.78-1.88l-1.4-.41a1.3,1.3,0,0,1,0-2.5l1.4-.41a1.31,1.31,0,0,0,.78-1.88l-.7-1.27A1.3,1.3,0,0,1,7.19,5.42l1.27.7a1.31,1.31,0,0,0,1.88-.78l.41-1.4A1.3,1.3,0,0,1,13.25,3.94Z"/>
		</svg>
	