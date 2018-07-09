import { Component, Prop } from '@stencil/core';

import { LiskButton } from '../lisk-button/lisk-button';
import { getURL } from '../utils/index';

@Component({
  tag: 'lisk-button-send',
})
export class LiskButtonSend extends LiskButton {
  constructor() {
    super();
  }

  @Prop() amount: number;
  @Prop() recipient: string;
  @Prop() buttonTitle: string;
  @Prop() classNames = 'lisk-btn-send-wrapper';

  private open = (): void => {
    const { amount, recipient } = this;
    const url = getURL({ amount, recipient, kind: 'send' });
    this.openUrl(url);
  }

  private getTitle = () =>
    this.buttonTitle || `Send ${this.amount} LSK to ${this.recipient}`

  hostData() {
    return super.hostData(this.classNames);
  }

  render() {
    return <button onClick={this.open}>{this.getTitle()}</button>;
  }
}
