
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
			class="pangolicons pangolicons-snail {className}"
		>
			<path  d="M4,17.5H16.44a.86.86,0,0,0,.36-.08c.7-.32,3.2-1.62,3.2-3.92a5.59,5.59,0,0,0-.25-1.84.87.87,0,0,0-1.36-.35h0a.87.87,0,0,0,.16,1.46L20,13.5"/><path  d="M13.4,14.36C14.52,11,13,7.66,10.55,6.77A4.76,4.76,0,0,0,5.27,8.28c-1.48,2-1.18,5.19.35,6S10.19,13.37,10,12c-.13-.94-.58-1.9-1.25-2.08"/>
		</svg>
	