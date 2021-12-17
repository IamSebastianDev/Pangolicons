
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
			class="pangolicons pangolicons-smartphone {className}"
		>
			<path  d="M15.05,20H9A2,2,0,0,1,7,18.05V6A2,2,0,0,1,9,4h6.1A2,2,0,0,1,17,6v12.1A2,2,0,0,1,15.05,20ZM12,16.25a.25.25,0,1,0,.25.25A.25.25,0,0,0,12,16.25Z"/>
		</svg>
	