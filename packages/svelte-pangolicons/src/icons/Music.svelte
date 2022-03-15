
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
			class="pangolicons pangolicons-music {className}"
			{ ...$$restProps }
		>
			<path  d="M7.97,19.12c0,1.59-1.29,2.88-2.88,2.88s-2.88-1.29-2.88-2.88,1.29-2.88,2.88-2.88,2.88,1.29,2.88,2.88Zm13.83-2.4V2L7.97,4.57v14.72m10.95-5.58c-1.59,0-2.88,1.29-2.88,2.88s1.29,2.88,2.88,2.88,2.88-1.29,2.88-2.88-1.29-2.88-2.88-2.88Z"/>
		</svg>
	