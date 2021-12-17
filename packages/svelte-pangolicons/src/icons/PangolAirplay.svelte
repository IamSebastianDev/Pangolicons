
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
			class="pangolicons pangolicons-airplay {className}"
		>
			<path  d="M5.39,15.25A1.39,1.39,0,0,1,4,13.86V5.64A1.39,1.39,0,0,1,5.39,4.25H18.61A1.39,1.39,0,0,1,20,5.64v8.22a1.39,1.39,0,0,1-1.39,1.39"/><polygon  points="12 13.75 6.8 19.75 17.2 19.75 12 13.75"/>
		</svg>
	