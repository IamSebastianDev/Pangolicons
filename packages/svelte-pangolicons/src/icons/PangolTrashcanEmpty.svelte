
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
			class="pangolicons pangolicons-trashcanEmpty {className}"
		>
			<path  d="M6.5,7.19v11A1.86,1.86,0,0,0,8.35,20h7.3a1.86,1.86,0,0,0,1.85-1.85v-11"/><line  x1="5.59" y1="7.18" x2="18.41" y2="7.18"/><path  d="M9.07,6.83c0-.6.49-2.83,1.1-2.83h3.66c.61,0,1.1,2.23,1.1,2.83"/>
		</svg>
	