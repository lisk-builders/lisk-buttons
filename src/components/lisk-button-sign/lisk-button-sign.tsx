import { Component, Prop } from '@stencil/core';
import {  getURL } from '../utils/index';
import { LiskButton } from '../lisk-button/lisk-button';

@Component({
  tag: 'lisk-button-sign',
  styleUrl: '../lisk-button/lisk-button.scss',
  shadow: true
})
export class LiskButtonSign extends LiskButton {
  constructor() {
    super();
    this.open = this.open.bind(this);
  }

  @Prop() type: string;
  @Prop() message: string;
  @Prop() buttonTitle: string

  open() {
    const { type, message } = this;

    const url = getURL({ message, kind: (type === 'nano' ? 'sign-nano' : 'sign-hub') });
    this.openUrl(url);
  }

  render() {
    //NB: Lisk-nano doesn't support message pre-fill... it will just open sign message page
    const wallet = this.type === 'nano' ? 'Lisk Nano' : "Lisk Hub";
    return <button class={`btn btn-primary ${this.loading ? 'loading' : ''} ${this.showTooltip ? 'tooltip' : ''}`}
                   onClick={this.open}
                   data-tooltip={this.getTooltipText()}>{this.buttonTitle || `Use ${wallet} to sign the message`}</button>
  }
}
