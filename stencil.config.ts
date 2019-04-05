import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  bundles: [
    { components: ['lisk-button-send', 'lisk-button-vote', 'lisk-button-sign'] }
  ],
  plugins: [
    sass(),
  ],
  namespace: 'liskButtons',
  outputTargets: [
    { type: 'www' },
    { type: 'dist' },
  ],
};
