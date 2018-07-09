import { Component, Prop } from '@stencil/core';

import { LiskButton } from '../lisk-button/lisk-button';
import { getURL } from '../utils/index';

@Component({
  tag: 'lisk-button-sign',
})
export class LiskButtonSign extends LiskButton {
  constructor() {
    super();
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

  private open = (): void => {
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

  hostData() {
    return super.hostData(this.classNames);
  }

  render() {
    // NB: Lisk-nano doesn't support message pre-fill... it will just open sign message page
    return <button onClick={this.open}>{this.getTitle()}</button>;
  }
}
