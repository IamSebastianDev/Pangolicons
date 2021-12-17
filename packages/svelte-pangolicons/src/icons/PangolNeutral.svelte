
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
			class="pangolicons pangolicons-neutral {className}"
		>
			<path  d="M20.5,12A8.5,8.5,0,1,1,12,3.5,8.51,8.51,0,0,1,20.5,12ZM8.69,9.17a.47.47,0,1,0,.48.47A.47.47,0,0,0,8.69,9.17Zm6.62,0a.47.47,0,1,0,.47.47A.47.47,0,0,0,15.31,9.17ZM8.69,14.78s-.47.05,6.62,0"/>
		</svg>
	