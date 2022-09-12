<script lang="ts">
	import axios from 'axios';

	const file = 'hi.txt';
	const pdf = 'attestation.pdf';

	const APIR = 'http://127.0.0.1:8080/api/v0';
	const APIW = 'http://127.0.0.1:5001/api/v0';
	// const APIR = 'https://ipfs.infura.io:5001/api/v0';
	// APIW = APIR;
	let res,
		formData,
		cid = 'QmY9cxiHqTFoWamkQVkpmmqzBrY3hCBEL2XNu3NtX74Fuu';

	async function main() {
		try {
			console.log('IPFS VERSION');
			res = await axios.get(APIR + '/version');
			console.log(res.data);

			console.log('IPFS CAT CID');
			res = await axios.get(APIR + '/cat', { params: { arg: cid } });
			console.log(res.data);

			console.log('IPFS ADD URL');
			formData = new FormData();
			formData.append('file', (await axios.get(pdf)).data);
			res = await axios.post(APIW + '/add', formData);
			console.log(res.data);
		} catch (e) {
			console.error('ERROR', e);
		}
	}
	main();
</script>

<main>
	IPFS
	<a href={pdf}>Doc PDF origine</a>
	<a href="http://127.0.0.1:8080/{cid}">Doc PDF sous IPFS</a>
	CID=
	{cid}
</main>
