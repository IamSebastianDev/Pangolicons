
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
			class="pangolicons pangolicons-dragIndicator {className}"
		>
			<circle  cx="12" cy="7" r="0.5"/><circle  cx="17" cy="12" r="0.5"/><circle  cx="12" cy="17" r="0.5"/><circle  cx="7" cy="12" r="0.5"/>
		</svg>
	