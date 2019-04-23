import { Component, Prop } from '@stencil/core';

import {
  AppUrls,
  appLinks,
  getURL,
  mobile,
  openURL as checkAndOpen,
} from '../utils/index';

@Component({
  tag: 'lisk-button-sign',
})
export class LiskButtonSign {

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

  @Prop() type: string;
  @Prop() message: string;
  @Prop() buttonTitle: string;
  @Prop() sourceId = '';
  @Prop() classNames = 'lisk-btn-sign-wrapper';

  private getValue(): string {
    const input: HTMLInputElement = document.querySelector(`#${this.sourceId}`);
    return input.value;
  }

  open = (): void => {
    const { type, message } = this;
    const data = this.sourceId ? this.getValue() : message;
    const url = getURL({
      message: data,
      kind: type === 'nano' ? 'sign-nano' : 'sign-hub',
    });
    this.openUrl(url);
  }

  private getTitle = () => {
    const wallet = this.type === 'nano' ? 'Lisk Nano' : 'Lisk Hub';
    return this.buttonTitle || `Use ${wallet} to sign the message`;
  }

  render() {
    // NB: Lisk-nano doesn't support message pre-fill... it will just open sign message page
    return <button onClick={this.open}>{this.getTitle()}</button>;
  }
}
