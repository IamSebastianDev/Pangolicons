
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
			class="pangolicons pangolicons-folderMinus {className}"
		>
			<polygon  points="20.5 18.5 3.5 18.5 3.5 5.5 9.53 5.5 12 7.5 20.5 7.5 20.5 18.5"/><line  x1="10" y1="13" x2="14" y2="13"/>
		</svg>
	