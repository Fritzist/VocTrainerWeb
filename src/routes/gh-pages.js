var ghpages = require('gh-pages');

ghpages.publish(
  'public', // path to public directory
  {
    branch: 'gh-pages',
    repo: 'https://github.com/Fritzist/VocTrainerWeb', // Update to point to your repository
    user: {
      name: 'Fritz', // update to use your name
      email: 'danielhartl856@gmail.com' // Update to use your email
    },
    dotfiles: true
  },
  () => {
    console.log('Deploy Complete!');
  }
);