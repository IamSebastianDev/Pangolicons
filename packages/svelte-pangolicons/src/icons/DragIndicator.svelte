
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
			class="pangolicons pangolicons-dragIndicator {className}"
			{ ...$$restProps }
		>
			<path  d="M12.91,2.91c0,.5-.41,.91-.91,.91s-.91-.41-.91-.91,.41-.91,.91-.91,.91,.41,.91,.91Zm8.18,8.18c-.5,0-.91,.41-.91,.91s.41,.91,.91,.91,.91-.41,.91-.91-.41-.91-.91-.91Zm-9.09,9.09c-.5,0-.91,.41-.91,.91s.41,.91,.91,.91,.91-.41,.91-.91-.41-.91-.91-.91ZM2.91,11.09c-.5,0-.91,.41-.91,.91s.41,.91,.91,.91,.91-.41,.91-.91-.41-.91-.91-.91Z"/>
		</svg>
	