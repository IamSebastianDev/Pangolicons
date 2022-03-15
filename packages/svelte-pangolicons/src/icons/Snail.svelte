
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
			class="pangolicons pangolicons-snail {className}"
			{ ...$$restProps }
		>
			<path  d="M22,13.87l-1.81-.91c-.71-.36-.82-1.33-.2-1.83h0c.57-.46,1.45-.25,1.7,.44,.18,.49,.31,1.22,.31,2.29s-.47,2.04-1.09,2.78c-1.24,1.47-3.12,2.22-5.04,2.22H2m11.75-3.92c1.4-4.26-.52-8.38-3.56-9.49-2.13-.78-5.04-.18-6.61,1.89-1.85,2.44-1.48,6.49,.45,7.44,2.1,1.04,5.47-.29,5.47-2.79,0-1.19-1.25-2.5-2.5-2.5"/>
		</svg>
	