
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
			class="pangolicons pangolicons-pangolin {className}"
			{ ...$$restProps }
		>
			<path  d="M6.44,4.22s6.67,1.11,3.33,3.33L2,12C2,6.48,6.48,2,12,2s10,4.48,10,10-4.48,10-10,10H6.44l10-5.56m-4.44-6.67s-4.44,3.33-3.33,5.56c0,0,3.33-2.22,5.56-1.11"/>
		</svg>
	