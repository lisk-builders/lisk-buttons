import { Component, Prop, State } from '@stencil/core';
import {  getURL, openURL } from '../utils/index';

const erroTooltip = 'You need to install the Lisk Nano to use this feature';

@Component({
  tag: 'lisk-button-send',
  styleUrl: 'lisk-buttons.scss'
})
export class LiskButtonSend {
  constructor() {
    this.open = this.open.bind(this);
  }

  @Prop() amount: number;
  @Prop() recipient: string;
  @Prop() title: string
  @State() showTooltip: boolean = false;
  @State() loading: boolean = false;

  onError() {
    this.loading = false;
    this.showTooltip = true;
  }

  onSuccess() {
    this.loading = false;
    this.showTooltip = false;
  }

  open() {
    const { amount, recipient } = this;
    this.loading = true;
    this.showTooltip = false;
    const url = getURL('send', { amount, recipient });
    openURL(url, this.onError.bind(this), this.onSuccess.bind(this));
  }

  render() {
    return <button class={`btn btn-primary ${this.loading ? 'loading' : ''} ${this.showTooltip ? 'tooltip' : ''}`}
                   onClick={this.open}
                   data-tooltip={erroTooltip}>{this.title || `Send ${this.amount} LSK to ${this.recipient}`}</button>
  }
}
