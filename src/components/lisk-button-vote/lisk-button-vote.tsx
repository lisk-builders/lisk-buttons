import { Component, Prop } from '@stencil/core';

import {
  AppUrls,
  appLinks,
  getURL,
  mobile,
  openURL as checkAndOpen,
} from '../utils/index';

@Component({
  tag: 'lisk-button-vote',
})
export class LiskButtonVote {

  private urls: AppUrls = appLinks;

  @Prop() unvotes: string;
  @Prop() votes: string;
  @Prop() buttonTitle: string;
  @Prop() classNames = 'lisk-btn-vote-wrapper';

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

  hostData() {
    return {
      class: {
        [this.classNames]: true,
      },
    };
  }

  open = (): void => {
    const { votes, unvotes } = this;
    const url = getURL({ votes, unvotes, kind: 'vote' });
    this.openUrl(url);
  }

  private getTitle = () => this.buttonTitle || this.getDefaultTitle();

  private getDefaultTitle = () => {
    if (this.votes) {
      const [first, ...others] = this.votes.split(',');
      return `Vote for ${first}${
        others.length ? ` and ${others.length} others...` : ''
      }`;
    } else if (this.unvotes) {
      const [first, ...others] = this.unvotes.split(',');
      return `Unvote ${first}${
        others.length ? ` and ${others.length} others...` : ''
      }`;
    }
  }

  render() {
    return <button onClick={this.open}>{this.getTitle()}</button>;
  }
}
