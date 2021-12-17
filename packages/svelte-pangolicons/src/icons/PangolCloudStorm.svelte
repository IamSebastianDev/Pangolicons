
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
			class="pangolicons pangolicons-cloudStorm {className}"
		>
			<path  d="M16.5,15.07a4,4,0,0,0,0-8,4,4,0,0,0-1.62.35,6,6,0,1,0-8.7,7.65"/><line  x1="13.38" y1="12.95" x2="10.63" y2="17.71"/><line  x1="10.71" y1="12.56" x2="7.96" y2="17.33"/><line  x1="14.37" y1="16.23" x2="12.23" y2="19.93"/>
		</svg>
	