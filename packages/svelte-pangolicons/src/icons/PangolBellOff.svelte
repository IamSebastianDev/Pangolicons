
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
			class="pangolicons pangolicons-bellOff {className}"
		>
			<path  d="M9.4,5A3.87,3.87,0,0,1,12,4m.1,12.68H4.79c1.89-.53,2.8-3.11,3.16-5.35M12,4a3.91,3.91,0,0,1,3.91,3.91,22,22,0,0,0,.51,4.66M9.48,19.48a6.51,6.51,0,0,0,5,0"/><line  x1="4.5" y1="4.5" x2="19.5" y2="19.5"/>
		</svg>
	