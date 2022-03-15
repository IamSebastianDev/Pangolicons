
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
			class="pangolicons pangolicons-volumeMute {className}"
			{ ...$$restProps }
		>
			<path  d="M6.25,15.54H2v-7.08H6.25v7.08ZM11.91,2.79l-5.67,5.67v7.08l5.67,5.67V2.79Zm4.08,12.21l6.01-6.01m-6.01,0l6.01,6.01"/>
		</svg>
	