const ghpages = require('gh-pages');

const package = require('./package.json');
 
ghpages.publish('dist', (err) => {
    if (err) {
        console.error('Failed with', err);
        process.exit(1);
    } else {
        const url = getUrl();
        console.log(`Published to ${ url }`)
    }
});

function getUrl () {
    const name = package.name;
    const repositoryUrl = package.repository.url;
    const org = parseGitHubOrg(repositoryUrl);
    return `https://${ org }.github.io/${ name }/`;
}

function parseGitHubOrg (repositoryUrl) {
    const regex = /.*github\.com\/([\w]+)\/.*/;
    const matches = regex.exec(repositoryUrl);
    if (matches === null) {
        return null;
    } else {
        return matches[ 1 ];
    }
}