
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
			class="pangolicons pangolicons-server {className}"
		>
			<path  d="M18.5,18.66H5.5a1,1,0,0,1-1-1v-3a1,1,0,0,1,1-1h13a1,1,0,0,1,1,1v3A1,1,0,0,1,18.5,18.66ZM8,15.91a.25.25,0,1,0,.25.25A.25.25,0,0,0,8,15.91Z"/><path  d="M18.5,10.34H5.5a1,1,0,0,1-1-1v-3a1,1,0,0,1,1-1h13a1,1,0,0,1,1,1v3A1,1,0,0,1,18.5,10.34ZM15.88,7.59a.25.25,0,1,0,.25.25A.25.25,0,0,0,15.88,7.59Z"/>
		</svg>
	