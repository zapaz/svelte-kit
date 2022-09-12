<script lang="ts">
	import Magic from '$lib/tests/magic.svelte';
</script>

<svelte:head>
	<title>Magic</title>
	<meta name="description" content="Magic connect" />
</svelte:head>

<section>
	<Magic />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}
</style>
