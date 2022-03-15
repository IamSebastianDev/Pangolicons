
		<script>
			let className = ''; 
			export {className as class}; 
			export let size = '24';
			export let strokeWidth = '1.5';
			export let color = "currentColor";
			export let linejoin = "round";
			export let linecap = "round";
		</script>

		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			fill="none"
			viewBox="0 0 24 24"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap={linecap}
			stroke-linejoin={linejoin}
			class="pangolicons pangolicons-trashcanFilled {className}"
			{ ...$$restProps }
		>
			<path  d="M18.87,5.99v13.7c0,1.27-1.04,2.31-2.31,2.31H7.44c-1.27,0-2.31-1.04-2.31-2.31V5.99m-1.15-.02H20.02m-4.35-.43c0-.76-.62-3.54-1.37-3.54h-4.58c-.76,0-1.37,2.78-1.37,3.54m1.37,3.96v8.64m4.58-8.64v8.64"/>
		</svg>
	