
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
			class="pangolicons pangolicons-parcel {className}"
		>
			<path  d="M12,4l8,3.2v9.6L12,20,4,16.8V7.2L8.51,5.39ZM4,7.2l8,3.2,8-3.2m-8,3.2V20M16,8.8,8,5.59"/>
		</svg>
	