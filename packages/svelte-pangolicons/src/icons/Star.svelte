
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
			class="pangolicons pangolicons-star {className}"
			{ ...$$restProps }
		>
			<path  d="M12,2.49l3.09,6.26,6.91,1-5,4.87,1.18,6.88-6.18-3.25-6.18,3.25,1.18-6.88L2,9.75l6.91-1,3.09-6.26Z"/>
		</svg>
	