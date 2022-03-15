
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
			class="pangolicons pangolicons-robot {className}"
			{ ...$$restProps }
		>
			<path  d="M20.85,22H3.15c-.63,0-1.15-.51-1.15-1.15v-7.71c0-.63,.51-1.15,1.15-1.15H20.85c.63,0,1.15,.51,1.15,1.15v7.71c0,.63-.51,1.15-1.15,1.15ZM12,7c1.38,0,2.5-1.12,2.5-2.5s-1.12-2.5-2.5-2.5-2.5,1.12-2.5,2.5,1.12,2.5,2.5,2.5Zm0,0v5m-3.75,4.38c-.35,0-.62,.28-.62,.62s.28,.62,.62,.62,.62-.28,.62-.62-.28-.62-.62-.62Zm7.5,0c-.35,0-.62,.28-.62,.62s.28,.62,.62,.62,.62-.28,.62-.62-.28-.62-.62-.62Z"/>
		</svg>
	