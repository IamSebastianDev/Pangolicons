
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
			class="pangolicons pangolicons-mug {className}"
			{ ...$$restProps }
		>
			<path  d="M17.19,2V15.75c0,3.44-2.25,6.25-4.99,6.25H7.37c-2.75,0-4.99-2.81-4.99-6.25V2m14.81,12.24c0,1.03,.84,1.87,1.87,1.87h.69c1.03,0,1.87-.84,1.87-1.87v-5.51c0-1.03-.84-1.87-1.87-1.87h-.69c-1.03,0-1.87,.84-1.87,1.87"/>
		</svg>
	