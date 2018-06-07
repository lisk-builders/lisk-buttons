const sass = require('@stencil/sass');

exports.config = {
  plugins: [
    sass()
  ],
  bundles: [
    { components: ['lisk-button-send', 'lisk-button-vote', 'lisk-button-sign'] }
  ],
  namespace: 'liskButtons',
  outputTargets: [
    { type: 'www' },
    { type: 'dist' }
  ],
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
