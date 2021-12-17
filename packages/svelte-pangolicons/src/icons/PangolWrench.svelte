
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
			class="pangolicons pangolicons-wrench {className}"
		>
			<path  d="M13.51,13.06c7.69,1.28,6.41-6.42,6.41-6.42L16.71,9.85,14.15,7.29l3.21-3.21s-7.7-1.28-6.42,6.41L4.53,16.9a1.82,1.82,0,0,0,0,2.57h0a1.82,1.82,0,0,0,2.57,0Z"/>
		</svg>
	