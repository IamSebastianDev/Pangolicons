
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
			class="pangolicons pangolicons-location {className}"
			{ ...$$restProps }
		>
			<path  d="M14.61,8.96c0,1.44-1.17,2.61-2.61,2.61s-2.61-1.17-2.61-2.61,1.17-2.61,2.61-2.61,2.61,1.17,2.61,2.61Zm3.18,4.03c2.85-4.44,.11-10.54-5.15-10.96-.21-.02-.43-.03-.64-.03s-.43,0-.64,.03c-5.26,.43-8,6.53-5.15,10.96l5.79,9.01,5.79-9.01Z"/>
		</svg>
	