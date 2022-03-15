
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
			class="pangolicons pangolicons-twitch {className}"
			{ ...$$restProps }
		>
			<path  d="M7.4,22v-3.63H2.79c-.28,0-.51-.23-.51-.51V2.51c0-.28,.23-.51,.51-.51H21.21c.28,0,.51,.23,.51,.51V13.77c0,.13-.06,.26-.15,.36l-4.09,4.09c-.09,.1-.22,.15-.36,.15h-5.92l-3.8,3.63ZM15.07,6.47v6.4m-6.14-6.4v6.4"/>
		</svg>
	