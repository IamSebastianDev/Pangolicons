
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
			class="pangolicons pangolicons-bookOpen {className}"
			{ ...$$restProps }
		>
			<path  d="M12,6.31c0-4.99,9.98-4.28,9.98-4.28v15.69s-9.98-.71-9.98,4.28M2.02,2.04v15.69s9.98-.71,9.98,4.28V6.31C12,1.32,2.02,2.04,2.02,2.04Z"/>
		</svg>
	