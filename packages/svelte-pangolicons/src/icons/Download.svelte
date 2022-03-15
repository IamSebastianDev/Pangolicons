
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
			class="pangolicons pangolicons-download {className}"
			{ ...$$restProps }
		>
			<path  d="M12,3.18v12.94l4.2-4.2-4.2,4.2-4.2-4.2m-5.8,4.2v2.94c0,.97,.79,1.76,1.76,1.76H20.24c.97,0,1.76-.79,1.76-1.76v-2.94"/>
		</svg>
	