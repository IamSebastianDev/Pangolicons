
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
			class="pangolicons pangolicons-sword {className}"
			{ ...$$restProps }
		>
			<path  d="M9.05,14.95h1.85L21.08,6.62l.92-4.62-4.62,.92L9.05,13.1v1.85Zm4.44,1.78c-.74,.74-2.72-.06-4.44-1.78-1.72-1.72-2.51-3.7-1.78-4.44m-5.28,7.67c.45-.45,1.67,.04,2.73,1.09,1.05,1.05,1.54,2.27,1.09,2.73m3.23-7.05l-3.86,3.86"/>
		</svg>
	