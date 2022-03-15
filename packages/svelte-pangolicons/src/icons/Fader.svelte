
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
			class="pangolicons pangolicons-fader {className}"
			{ ...$$restProps }
		>
			<path  d="M12,10.36v11.64m0-11.64,0-3.75,0-4.61V6.61m3.75,0h-7.5v3.75h7.5v-3.75Z"/>
		</svg>
	