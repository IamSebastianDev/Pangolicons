<script context="module">
	export const load = ({ error, status }) => {
		return {
			props: {
				error,
				status,
			},
		};
	};
</script>

<script>
	export let error;
	export let status;
</script>

<div
	class="mx-auto font-poppins font-semibold text-center h-s50 flex flex-col justify-center items-center"
>
	<h1 class=" text-6xl text-gray-800 dark:text-white py-3">
		{status}
	</h1>
	<h3 class="text-xl text-slate-400 dark:text-white uppercase py-3">
		{error.message}
	</h3>
</div>
