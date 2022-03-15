
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
			class="pangolicons pangolicons-phone {className}"
			{ ...$$restProps }
		>
			<path  d="M6.37,17.9C-1.02,9.71,3.2,2.07,3.2,2.07H7.42l1.06,4.22-2.11,2.11s-2.11,1.06,3.17,6.33m-3.17,3.17c8.38,7.17,15.63,2.58,15.63,2.58l-.11-4.22-4.25-.94-2.05,2.17s-.64,2.38-6.06-2.75"/>
		</svg>
	