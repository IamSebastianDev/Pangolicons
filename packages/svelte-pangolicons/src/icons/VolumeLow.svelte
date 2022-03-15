
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
			class="pangolicons pangolicons-volumeLow {className}"
			{ ...$$restProps }
		>
			<path  d="M11.23,15.85H6.62v-7.69h4.62v7.69ZM17.38,2l-6.15,6.15v7.69l6.15,6.15V2Z"/>
		</svg>
	