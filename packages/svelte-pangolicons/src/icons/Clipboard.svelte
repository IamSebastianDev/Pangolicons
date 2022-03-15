
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
			class="pangolicons pangolicons-clipboard {className}"
			{ ...$$restProps }
		>
			<path  d="M15.75,4.5h3.75V22H4.5V4.5h3.75m7.5,0-7.5,0,7.5-2.5h-7.5v3.75h7.5V2Z"/>
		</svg>
	