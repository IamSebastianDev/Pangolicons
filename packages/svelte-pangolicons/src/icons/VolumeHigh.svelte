
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
			class="pangolicons pangolicons-volumeHigh {className}"
			{ ...$$restProps }
		>
			<path  d="M6.29,15.57H2v-7.14H6.29v7.14ZM12,2.71l-5.71,5.71v7.14l5.71,5.71V2.71Zm4.29,13.57c1.43-2.86,1.43-5.71,0-8.57m4.29,10c1.9-3.81,1.9-7.62,0-11.43"/>
		</svg>
	