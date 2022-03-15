
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
			class="pangolicons pangolicons-unlock {className}"
			{ ...$$restProps }
		>
			<path  d="M18.34,22H5.66c-1.1,0-1.98-.89-1.98-1.98v-6.63c0-1.1,.89-1.98,1.98-1.98h12.68c1.1,0,1.98,.89,1.98,1.98v6.63c0,1.1-.89,1.98-1.98,1.98Zm-.33-16.66c-1.5-2.99-5.14-4.2-8.13-2.7-2.99,1.5-4.2,5.14-2.7,8.13m9.19,4.98c.35,0,.62-.28,.62-.62s-.28-.62-.62-.62-.62,.28-.62,.62,.28,.62,.62,.62Z"/>
		</svg>
	