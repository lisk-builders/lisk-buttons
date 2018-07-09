import { Component, State } from '@stencil/core';

import { openURL as checkAndOpen } from '../utils/index';

@Component({
  tag: 'lisk-button',
})
export class LiskButton {
  @State() loading = false;

  openUrl(url: string): void {
    this.loading = true;
    checkAndOpen(url, this.onError, this.onSuccess);
  }

  private onSuccess = (): void => {
    this.loading = false;
  }

  private onError = (): void => {
    this.loading = false;
  }

  hostData(classNames = '') {
    return {
      class: {
        [classNames]: true,
      },
    };
  }
}
