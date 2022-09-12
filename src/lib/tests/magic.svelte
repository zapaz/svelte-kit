<script lang="ts">
	import { Magic } from 'magic-sdk';
	import { ConnectExtension } from '@magic-ext/connect';
	import { ethers } from 'ethers';

	const web3Connect = async (
		web3: ethers.providers.ExternalProvider
	): Promise<string | undefined> => {
		let accounts: Array<string> = [];

		if (!web3.request) return;
		try {
			accounts = await web3.request({ method: 'eth_requestAccounts' });

			console.log('web3Connect ~ accounts', accounts);
		} catch (e) {
			console.error('web3Connect', e);
		}
		return accounts[0];
	};

	/// MAGIC
	const magic = new Magic('pk_live_3199AAC8914C04CD', {
		network: 'rinkeby',
		extensions: [new ConnectExtension()]
	});
	// console.log('magic', magic);

	const ethersProviderMagic = new ethers.providers.Web3Provider(
		magic.rpcProvider as unknown as ethers.providers.ExternalProvider
	);

	const connectMagic = async () => {
		console.log('ethersProviderMagic.listAccounts()', await ethersProviderMagic.listAccounts());
		// console.log('connectMagic1');
		// await web3Connect(magic.rpcProvider as unknown as providers.ExternalProvider);
		// console.log('connectMagic2');
	};

	// magic.connect.showWallet().catch(console.error);
	// magic.connect.requestUserInfo();

	/// METAMASK
	const ethereum = window?.ethereum as ethers.providers.ExternalProvider;
	const ethersProvider = new ethers.providers.Web3Provider(ethereum, 'any');

	const connectMetamask = async () => {
		console.log('web3Connect(ethereum)', await web3Connect(ethereum));
		console.log('ethersProvider.listAccounts()', await ethersProvider.listAccounts());
	};

	// 		ethersProvider.getBlock('latest').then((block) => console.log(block.number));
	// 		connectMetamask();
	// 		ethersProvider.listAccounts().then(console.log)
	// 	}
</script>

<p on:click={connectMagic}>Connect Magic</p>
<p on:click={connectMetamask}>Connect Metamask</p>
