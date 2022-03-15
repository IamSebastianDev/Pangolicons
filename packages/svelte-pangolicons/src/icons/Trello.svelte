
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
			class="pangolicons pangolicons-trello {className}"
			{ ...$$restProps }
		>
			<path  d="M20.21,22H4.04V2H20.21V22ZM10.8,4.94h-3.53v14.12h3.53V4.94Zm6.47,0h-3.53v7.06h3.53V4.94Z"/>
		</svg>
	