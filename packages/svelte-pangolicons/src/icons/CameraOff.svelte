
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
			class="pangolicons pangolicons-cameraOff {className}"
			{ ...$$restProps }
		>
			<path  d="M7.52,3.88m10.21,2.5l-3.73-2.5h-4l-1.51,1.01m0,0M2.55,6.93m0,0c-.34,.34-.55,.81-.55,1.33v9.99c0,1.04,.84,1.88,1.88,1.88h12.39m5.73-2.51V8.25c0-1.04-.84-1.88-1.88-1.88h-2.39m-7.6,3.75c-.76,.57-1.25,1.48-1.25,2.5,0,1.73,1.4,3.12,3.12,3.12,1.02,0,1.93-.49,2.5-1.25M2,2L22,22"/>
		</svg>
	