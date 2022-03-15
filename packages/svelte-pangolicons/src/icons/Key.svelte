
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
			class="pangolicons pangolicons-key {className}"
			{ ...$$restProps }
		>
			<path  d="M3.86,20.5l-1.25-1.25c-1.37-1.37-1.37-3.62,0-4.99l1.25-1.25c1.37-1.37,3.62-1.37,4.99,0l1.25,1.25c1.37,1.37,1.37,3.62,0,4.99l-1.25,1.25c-1.37,1.37-3.62,1.37-4.99,0Zm6.65-7.9L19.87,3.25m-3.12,5.2l2.08,2.08,3.12-3.12-3.12-3.12"/>
		</svg>
	