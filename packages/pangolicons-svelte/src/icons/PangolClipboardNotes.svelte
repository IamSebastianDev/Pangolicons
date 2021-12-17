
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
			class="pangolicons pangolicons-clipboardNotes {className}"
		>
			<polyline  points="15.19 5.63 18.38 5.63 18.38 20.5 5.63 20.5 5.63 5.63 8.81 5.63"/><rect  x="8.81" y="3.5" width="6.38" height="3.19"/><line  x1="8.91" y1="13.5" x2="15.09" y2="13.5"/><line  x1="8.91" y1="10.5" x2="15.09" y2="10.5"/><line  x1="8.91" y1="16.5" x2="15.09" y2="16.5"/>
		</svg>
	