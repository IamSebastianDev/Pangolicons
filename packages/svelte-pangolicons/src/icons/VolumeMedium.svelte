
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
			class="pangolicons pangolicons-volumeMedium {className}"
			{ ...$$restProps }
		>
			<path  d="M8.35,15.85H3.73v-7.69h4.62v7.69ZM14.5,2l-6.15,6.15v7.69l6.15,6.15V2Zm4.62,14.62c1.54-3.08,1.54-6.15,0-9.23"/>
		</svg>
	