
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
			class="pangolicons pangolicons-moonStylized {className}"
		>
			<path  d="M15.78,13.89A5.67,5.67,0,0,1,12.6,3.53l-.6,0A8.5,8.5,0,1,0,20.5,12c0-.2,0-.4,0-.6A5.67,5.67,0,0,1,15.78,13.89Z"/>
		</svg>
	