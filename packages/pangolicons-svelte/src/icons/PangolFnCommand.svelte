
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
			class="pangolicons pangolicons-fnCommand {className}"
		>
			<rect  x="3.5" y="3.5" width="17" height="17" rx="1.5"/><path  d="M13.5,8.5a2,2,0,1,1,2,2h-7a2,2,0,1,1,2-2v7a2,2,0,1,1-2-2h7a2,2,0,1,1-2,2Z"/>
		</svg>
	