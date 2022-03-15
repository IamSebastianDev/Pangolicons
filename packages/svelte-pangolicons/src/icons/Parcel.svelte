
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
			class="pangolicons pangolicons-parcel {className}"
			{ ...$$restProps }
		>
			<path  d="M12,2l10,4v12l-10,4L2,18V6L7.64,3.74l4.36-1.74ZM2,6l10,4,10-4m-10,4v12m5-14L7.04,3.98"/>
		</svg>
	