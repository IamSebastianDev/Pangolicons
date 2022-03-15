
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
			class="pangolicons pangolicons-power {className}"
			{ ...$$restProps }
		>
			<path  d="M16.4,6.06c2.48,1.5,4.14,4.22,4.14,7.33,0,4.72-3.83,8.55-8.55,8.55S3.45,18.1,3.45,13.38c0-3.11,1.66-5.83,4.14-7.33M12,1.93V13.47"/>
		</svg>
	