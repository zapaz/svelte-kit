<script lang="ts">
	import Metamask from './metamask.svelte';

	let signer = '';
	let addresses;
	let chainId = '';
	let value;

	export let address;
	$: address = value;
</script>

<main>
	{#key signer}
		<br /> signer {signer}
		<br /> address {address}
		<br /> chainId {chainId}

		{#if addresses?.length > 0}
			<select bind:value>
				{#each addresses as addr}
					<option value={addr}>{addr}</option>
				{/each}
			</select>
		{/if}

		<Metamask bind:signer bind:addresses bind:chainId />
	{/key}
</main>
