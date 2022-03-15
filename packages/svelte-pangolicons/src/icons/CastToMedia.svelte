
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
			class="pangolicons pangolicons-castToMedia {className}"
			{ ...$$restProps }
		>
			<path  d="M2,10.82V3.77c0-.98,.79-1.77,1.77-1.77H20.23c.98,0,1.77,.79,1.77,1.77V20.23c0,.98-.79,1.77-1.77,1.77h-7.06m-10.59-.88c-.16,0-.29,.13-.29,.29s.13,.29,.29,.29,.29-.13,.29-.29-.13-.29-.29-.29Zm3.48,.88c.03-.19,.05-.39,.05-.59,0-1.95-1.58-3.53-3.53-3.53-.2,0-.4,.02-.59,.05m7.62,4.07c.02-.19,.02-.39,.02-.59,0-3.9-3.16-7.06-7.06-7.06-.2,0-.39,0-.59,.02"/>
		</svg>
	