
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
			class="pangolicons pangolicons-shield {className}"
		>
			<path  d="M13.83,20.15A30.08,30.08,0,0,0,20,6.38a2.1,2.1,0,0,0-1.81-2.3L12.45,3a2.72,2.72,0,0,0-.9,0l-5.72,1A2.1,2.1,0,0,0,4,6.38a30.08,30.08,0,0,0,6.15,13.77A2.4,2.4,0,0,0,13.83,20.15Z"/>
		</svg>
	