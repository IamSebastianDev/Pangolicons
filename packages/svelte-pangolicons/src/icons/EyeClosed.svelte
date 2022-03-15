
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
			class="pangolicons pangolicons-eyeClosed {className}"
			{ ...$$restProps }
		>
			<path  d="M22,12c0,1.29-4.48,6.47-10,6.47S2,13.29,2,12,6.48,5.53,12,5.53s10,5.18,10,6.47Zm-13.33,0h6.67"/>
		</svg>
	