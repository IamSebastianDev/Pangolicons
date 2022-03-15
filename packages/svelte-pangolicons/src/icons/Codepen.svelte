
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
			class="pangolicons pangolicons-codepen {className}"
			{ ...$$restProps }
		>
			<path  d="M12,2l10,6.67-10,6.67L2,8.67,12,2ZM2,15.33l10,6.67,10-6.67-10-6.67L2,15.33Zm0-6.67v6.67m10,6.67v-6.67m10-6.67v6.67M12,2v6.67"/>
		</svg>
	