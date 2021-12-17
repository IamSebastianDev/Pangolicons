
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
			class="pangolicons pangolicons-sunSmall {className}"
		>
			<circle  cx="12" cy="12" r="3.78"/><line  x1="12" y1="3.5" x2="12" y2="5.39"/><line  x1="20.5" y1="12" x2="18.61" y2="12"/><line  x1="12" y1="20.5" x2="12" y2="18.61"/><line  x1="3.5" y1="12" x2="5.39" y2="12"/><line  x1="6.33" y1="6.33" x2="7.44" y2="7.44"/><line  x1="17.67" y1="6.33" x2="16.72" y2="7.28"/><line  x1="17.67" y1="17.67" x2="16.72" y2="16.72"/><line  x1="6.33" y1="17.67" x2="7.44" y2="16.56"/>
		</svg>
	