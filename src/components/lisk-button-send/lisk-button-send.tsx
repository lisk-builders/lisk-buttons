import { Component, Prop } from '@stencil/core';

import {
  AppUrls,
  appLinks,
  getURL,
  mobile,
  openURL as checkAndOpen,
} from '../utils/index';

@Component({
  tag: 'lisk-button-send',
})
export class LiskButtonSend {

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

  @Prop() amount: number;
  @Prop() recipient: string;
  @Prop() buttonTitle: string;
  @Prop() classNames = 'lisk-btn-send-wrapper';

  open = (): void => {
    const { amount, recipient } = this;
    const url = getURL({ amount, recipient, kind: 'send' });
    this.openUrl(url);
  }

  private getTitle = () =>
    this.buttonTitle || `Send ${this.amount} LSK to ${this.recipient}`

  render() {
    return <button onClick={this.open}>{this.getTitle()}</button>;
  }
}
