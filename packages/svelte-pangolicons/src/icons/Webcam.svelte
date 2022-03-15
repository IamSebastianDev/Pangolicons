
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
			class="pangolicons pangolicons-webcam {className}"
			{ ...$$restProps }
		>
			<path  d="M14.35,9.06c0,1.3-1.05,2.35-2.35,2.35s-2.35-1.05-2.35-2.35,1.05-2.35,2.35-2.35,2.35,1.05,2.35,2.35Zm-2.35-7.06c-3.9,0-7.06,3.16-7.06,7.06s3.16,7.06,7.06,7.06,7.06-3.16,7.06-7.06-3.16-7.06-7.06-7.06Zm0,14.12v5.88m-5.29,0h10.59"/>
		</svg>
	