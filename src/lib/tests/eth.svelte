<script lang="ts">
	import { ethers, BigNumber, utils, providers } from 'ethers';

	import Listbox from './listbox.svelte';

	// let network = "";
	let address = '';
	let balance = '0';
	const ethereum = window?.ethereum as providers.ExternalProvider;

	$: address && handleBalance(address);
	const handleBalance = async (address_: string): Promise<void> => {
		if (ethereum.request) {
			try {
				balance = utils.formatEther(
					await ethereum.request({
						method: 'eth_getBalance',
						params: [address_, 'latest']
					})
				);
				console.log('balance', balance);
			} catch (e) {
				console.error('getBalance', e);
			}
		}
	};
</script>

<main>
	<h1>Ethereum Balance</h1>

	<!-- <p>network: {network}</p> -->
	<p>address: {address}</p>
	<p>balance: {balance} ETH</p>
	<Listbox bind:address />
</main>

<style>
	main {
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	p {
		font-size: 2em;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
