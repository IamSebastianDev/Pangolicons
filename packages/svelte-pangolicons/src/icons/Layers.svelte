
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
			class="pangolicons pangolicons-layers {className}"
			{ ...$$restProps }
		>
			<path  d="M22,16.34l-9.93,4.96L2.14,16.34m-.14-4.34l9.93,4.96,9.93-4.96m0-4.34L11.93,2.69,2,7.66l9.93,4.96,9.93-4.96Z"/>
		</svg>
	