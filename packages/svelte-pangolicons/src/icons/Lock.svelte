
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
			class="pangolicons pangolicons-lock {className}"
			{ ...$$restProps }
		>
			<path  d="M18.47,21.93H5.53c-1.12,0-2.03-.91-2.03-2.03v-6.77c0-1.12,.91-2.03,2.03-2.03h12.95c1.12,0,2.03,.91,2.03,2.03v6.77c0,1.12-.91,2.03-2.03,2.03Zm-1.37-11.17c0-3.7-2.26-6.7-5.04-6.7s-5.04,3-5.04,6.7m9.45,4.79c.35,0,.64-.29,.64-.64s-.29-.64-.64-.64-.64,.29-.64,.64,.29,.64,.64,.64Z"/>
		</svg>
	