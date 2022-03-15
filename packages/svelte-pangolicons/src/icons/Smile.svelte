
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
			class="pangolicons pangolicons-smile {className}"
			{ ...$$restProps }
		>
			<path  d="M22,12c0,5.52-4.48,10-10,10S2,17.52,2,12,6.48,2,12,2s10,4.48,10,10Zm-13.89-3.33c-.31,0-.56,.25-.56,.56s.25,.56,.56,.56,.56-.25,.56-.56-.25-.56-.56-.56Zm7.78,0c-.31,0-.56,.25-.56,.56s.25,.56,.56,.56,.56-.25,.56-.56-.25-.56-.56-.56Zm-7.78,6.6s3.89,3.27,7.78,0"/>
		</svg>
	