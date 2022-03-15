
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
			class="pangolicons pangolicons-folderPlus {className}"
			{ ...$$restProps }
		>
			<path  d="M22,19.65H2V4.35h7.09l2.91,2.35h10v12.94Zm-12.35-6.47h4.71m-2.35,2.35v-4.71"/>
		</svg>
	