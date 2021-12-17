
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
			class="pangolicons pangolicons-pieChart {className}"
		>
			<path  d="M20.5,12A8.51,8.51,0,0,0,12,3.5"/><path  d="M9.58,3.85A8.5,8.5,0,1,0,20.12,14.53"/><polyline  points="12 3.5 12 12 20.5 12"/>
		</svg>
	