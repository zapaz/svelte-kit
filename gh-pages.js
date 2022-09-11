import ghpages from 'gh-pages';

ghpages.publish(
	'docs',
	{
		branch: 'gh-pages',
		repo: 'https://github.com/zapaz/svelte-kit.git',
		user: {
			name: 'zapaz',
			email: 'alain@kredeum.com'
		},
		dotfiles: true
	},
	() => {
		console.log('Deploy Complete!');
	}
);
