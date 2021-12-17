
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
			class="pangolicons pangolicons-github {className}"
		>
			<path  d="M10.12,20.5c.11-.74,0-4.95.37-5.24C8,15,5.28,14,5.28,9.61A4.42,4.42,0,0,1,6.46,6.55a4.09,4.09,0,0,1,.11-3s1-.31,3.14,1.17a10.68,10.68,0,0,1,5.72,0c2.18-1.48,3.14-1.17,3.14-1.17a4.09,4.09,0,0,1,.11,3,4.38,4.38,0,0,1,1.18,3.06c0,4.39-2.67,5.36-5.22,5.64a2.73,2.73,0,0,1,.78,2.12c0,1.52,0,2.76,0,3.13H9.74c0-.27,0-1,0-1.94C6.55,19.25,5.88,17,5.88,17a3,3,0,0,0-1.27-1.67"/>
		</svg>
	