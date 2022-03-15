
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
			class="pangolicons pangolicons-underline {className}"
			{ ...$$restProps }
		>
			<path  d="M19.69,2V11.33c0,4.42-3.44,6.67-7.69,6.67h0c-4.25,0-7.69-2.25-7.69-6.67V2m0,20h15.38"/>
		</svg>
	