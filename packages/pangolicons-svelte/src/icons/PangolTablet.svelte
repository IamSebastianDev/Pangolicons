
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
			class="pangolicons pangolicons-tablet {className}"
		>
			<path  d="M16.55,20H7.45A2,2,0,0,1,5.5,18.05V6A2,2,0,0,1,7.45,4h9.1A2,2,0,0,1,18.5,6v12.1A2,2,0,0,1,16.55,20ZM12,16.25c-.18,0-.33.11-.33.25s.15.25.33.25.33-.11.33-.25S12.18,16.25,12,16.25Z"/>
		</svg>
	