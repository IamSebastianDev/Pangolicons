
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
			class="pangolicons pangolicons-circleArrowLeftUp {className}"
			{ ...$$restProps }
		>
			<path  d="M8.67,8.67l6.66,6.66M8.67,8.67m0,5.12V8.67H13.8M12,22A10,10,0,1,0,2,12,10,10,0,0,0,12,22Z"/>
		</svg>
	