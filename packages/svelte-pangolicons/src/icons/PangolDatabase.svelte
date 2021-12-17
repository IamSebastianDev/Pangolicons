
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
			class="pangolicons pangolicons-database {className}"
		>
			<path  d="M12,4c-3.68,0-6.67,1-6.67,2.35s3,2.36,6.67,2.36,6.67-1.06,6.67-2.36S15.68,4,12,4Z"/><path  d="M12,14.35c-3.68,0-6.67-1-6.67-2.35v5.65C5.33,19,8.32,20,12,20s6.67-1.05,6.67-2.35V12C18.67,13.3,15.68,14.35,12,14.35Z"/><line  x1="5.33" y1="12" x2="5.33" y2="6.35"/><line  x1="18.67" y1="6.85" x2="18.67" y2="12"/>
		</svg>
	