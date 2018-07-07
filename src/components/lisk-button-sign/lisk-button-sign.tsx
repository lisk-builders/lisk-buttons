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
  @Prop() buttonTitle: string;
  @Prop() sourceId: string = "";

  getValue(): string {
    const input: HTMLInputElement = document.querySelector(`#${this.sourceId}`);
    return input.value;
  }

  open(): void {
    const { type, message } = this;
    const data = !!this.sourceId ? this.getValue() : message;
    const url = getURL({
      message: data,
      kind: (type === 'nano' ? 'sign-nano' : 'sign-hub')
    });
    this.openUrl(url);
  }

  render() {
    //NB: Lisk-nano doesn't support message pre-fill... it will just open sign message page
    const wallet = this.type === 'nano' ? 'Lisk Nano' : "Lisk Hub";
    return <button class={`btn btn-primary ${this.loading ? 'loading' : ''}`}
                   onClick={this.open}>{this.buttonTitle || `Use ${wallet} to sign the message`}</button>
  }
}
