
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
			class="pangolicons pangolicons-wifi {className}"
			{ ...$$restProps }
		>
			<path  d="M12.77,17.66c0,.42-.34,.75-.75,.75s-.75-.34-.75-.75,.34-.75,.75-.75,.75,.34,.75,.75Zm2.99-2.54c-.81-1.2-2.19-1.98-3.75-1.98s-2.94,.79-3.75,2m10.62-2.13c-1.49-2.2-4.01-3.64-6.87-3.64s-5.39,1.45-6.88,3.66m16.87-2.14c-2.17-3.19-5.84-5.29-9.99-5.29S4.17,7.7,2,10.91"/>
		</svg>
	