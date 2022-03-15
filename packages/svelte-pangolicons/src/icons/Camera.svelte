
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
			class="pangolicons pangolicons-camera {className}"
			{ ...$$restProps }
		>
			<path  d="M7.52,3.88m10.21,2.5l-3.73-2.5h-4l-3.73,2.5H3.88c-1.04,0-1.88,.84-1.88,1.88v9.99c0,1.04,.84,1.88,1.88,1.88H20.12c1.04,0,1.88-.84,1.88-1.88V8.25c0-1.04-.84-1.88-1.88-1.88h-2.39m-5.73,3.12c-1.73,0-3.12,1.4-3.12,3.12s1.4,3.12,3.12,3.12,3.12-1.4,3.12-3.12-1.4-3.12-3.12-3.12Z"/>
		</svg>
	