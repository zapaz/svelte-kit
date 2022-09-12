<script lang="ts">
	import Horloge from '$lib/tests/horloge.svelte';
	import Eth from '$lib/tests/eth.svelte';
</script>

<svelte:head>
	<title>Tests</title>
	<meta name="description" content="Tests: horloge, ipfs, metamask..." />
</svelte:head>

<div class="content">
	<Horloge />

	<Eth />
</div>
