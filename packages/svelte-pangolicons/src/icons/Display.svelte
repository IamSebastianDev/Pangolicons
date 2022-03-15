
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
			class="pangolicons pangolicons-display {className}"
			{ ...$$restProps }
		>
			<path  d="M22,14.63c0,.96-.78,1.74-1.74,1.74H3.74c-.96,0-1.74-.78-1.74-1.74V4.37c0-.96,.78-1.74,1.74-1.74H20.26c.96,0,1.74,.78,1.74,1.74V14.63Zm-10,6.74h0Zm0-5v5"/>
		</svg>
	