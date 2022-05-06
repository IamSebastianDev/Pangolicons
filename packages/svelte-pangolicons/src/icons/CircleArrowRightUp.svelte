
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
			class="pangolicons pangolicons-circleArrowRightUp {className}"
			{ ...$$restProps }
		>
			<path  d="M15.33,8.67,8.67,15.33m6.66-6.66-5.12,0h5.12V13.8M2,12A10,10,0,1,0,12,2,10,10,0,0,0,2,12Z"/>
		</svg>
	