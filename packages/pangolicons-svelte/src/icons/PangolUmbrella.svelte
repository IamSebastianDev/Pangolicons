
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
			class="pangolicons pangolicons-umbrella {className}"
		>
			<path  d="M4,11.5a8,8,0,0,1,16,0H4Z"/><path  d="M16,18.7a1.91,1.91,0,0,1-2,1.8,1.91,1.91,0,0,1-2-1.8V11.5"/>
		</svg>
	