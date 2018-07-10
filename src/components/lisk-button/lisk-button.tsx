import { Component } from '@stencil/core';

import {
  AppUrls,
  appLinks,
  mobile,
  openURL as checkAndOpen,
} from '../utils/index';

@Component({
  tag: 'lisk-button',
})
export class LiskButton {
  private urls: AppUrls = appLinks;

  openUrl(url: string): void {
    checkAndOpen(url, this.onError, this.onSuccess);
  }

  private onSuccess(): void {} // tslint:disable-line

  private onError = (): void => {
    let redirectUrl = this.urls.desktop;

    // Redirect to the mobile app store
    if (mobile.isAndroid && this.urls.android) {
      redirectUrl = this.urls.android;
    }

    if (mobile.isIOS && this.urls.ios) {
      redirectUrl = this.urls.ios;
    }

    window.location.href = redirectUrl;
  }

  hostData(classNames = '') {
    return {
      class: {
        [classNames]: true,
      },
    };
  }
}
