
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
			class="pangolicons pangolicons-fnCaps {className}"
			{ ...$$restProps }
		>
			<path  d="M20.5,22H3.5c-.83,0-1.5-.67-1.5-1.5V3.5c0-.83,.67-1.5,1.5-1.5H20.5c.83,0,1.5,.67,1.5,1.5V20.5c0,.83-.67,1.5-1.5,1.5Zm-2.62-11.43l-5.88-4.46-5.88,4.46h3.34v4.2h5.09v-4.2h3.34Zm-8.43,7.31h5.09"/>
		</svg>
	