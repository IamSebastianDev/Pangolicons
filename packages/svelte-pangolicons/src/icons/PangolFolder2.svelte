
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
			class="pangolicons pangolicons-folder2 {className}"
		>
			<polygon  points="20.5 18.5 3.5 18.5 3.5 5.5 8.53 5.5 11 9.5 20.5 9.5 20.5 18.5"/><path  d="M12,5.5h7.37A1.14,1.14,0,0,1,20.5,6.63V7"/>
		</svg>
	