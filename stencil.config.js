exports.config = {
  bundles: [
    { components: ['lisk-button-send', 'lisk-button-vote'] }
  ],
  namespace: 'liskButtons',
  generateDistribution: true,
  generateWWW: false,
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
