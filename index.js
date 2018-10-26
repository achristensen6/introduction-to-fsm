const ghpages = require('gh-pages');
 
ghpages.publish('dist', (err) => {
    if (err) {
        console.error('Failed with', err);
        process.exit(1);
    }
});