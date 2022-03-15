
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
			class="pangolicons pangolicons-microphone {className}"
			{ ...$$restProps }
		>
			<path  d="M12.64,13.43h-1.29c-.83,0-1.5-.67-1.5-1.5V3.5c0-.83,.67-1.5,1.5-1.5h1.29c.83,0,1.5,.67,1.5,1.5V11.93c0,.83-.67,1.5-1.5,1.5Zm-6.36-2.14c0,3.16,2.56,5.71,5.71,5.71s5.71-2.56,5.71-5.71m-5.71,5.71v4.94m2.14,.06h-4.29"/>
		</svg>
	