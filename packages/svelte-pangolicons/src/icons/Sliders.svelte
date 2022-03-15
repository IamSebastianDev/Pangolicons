
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
			class="pangolicons pangolicons-sliders {className}"
			{ ...$$restProps }
		>
			<path  d="M12,17.12v4.32m0-4.32,0-14.57V13.67m7.78-3.33v11.11m0-11.75,0-2.57,0-4.57V7.12m-15.56,3.77v10.56m0-10.56,0-8.33v5.56m-2.22,2.78H6.44m3.33,6.23h4.44m3.33-10h4.44"/>
		</svg>
	