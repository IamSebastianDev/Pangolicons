
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
			class="pangolicons pangolicons-wrench {className}"
			{ ...$$restProps }
		>
			<path  d="M5.87,21.34c-.89,.89-2.32,.89-3.21,0h0c-.89-.89-.89-2.32,0-3.21L10.68,10.12C9.08,.5,18.69,2.1,18.69,2.1l-4.01,4.01,3.21,3.21,4.01-4.01s1.6,9.62-8.01,8.01L5.87,21.34Z"/>
		</svg>
	