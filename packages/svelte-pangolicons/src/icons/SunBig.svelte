
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
			class="pangolicons pangolicons-sunBig {className}"
			{ ...$$restProps }
		>
			<path  d="M17,12c0,2.76-2.24,5-5,5s-5-2.24-5-5,2.24-5,5-5,5,2.24,5,5ZM12,2V7m10,5h-5m-5,10v-5M2,12H7m-2.07-7.07l3.54,3.54m10.61-3.54l-3.54,3.54m3.54,10.61l-3.54-3.54m-10.61,3.54l3.54-3.54"/>
		</svg>
	