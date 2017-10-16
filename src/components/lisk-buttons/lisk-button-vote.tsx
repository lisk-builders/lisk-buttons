import { Component, Prop, State } from '@stencil/core';
import {  getURL, openURL } from '../utils/index';

const erroTooltip = 'You need to install the Lisk Nano to use this feature';

@Component({
  tag: 'lisk-button-vote',
  styleUrl: 'lisk-buttons.scss'
})
export class LiskButtonVote {
  constructor() {
    this.open = this.open.bind(this);
    this.getDefaultTitle = this.getDefaultTitle.bind(this);
  }

  @Prop() unvotes: string;
  @Prop() votes: string;
  @Prop() title:string;
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
    const { votes, unvotes } = this;
    this.loading = true;
    this.showTooltip = false;
    const url = getURL('vote', { votes, unvotes });
    openURL(url, this.onError.bind(this), this.onSuccess.bind(this));
  }

  getDefaultTitle() {
    if (this.votes) {
      const [first, ...others] = this.votes.split(',');
      return `Vote for ${first}${others.length ? ` and ${others.length} others...` : ''}`;
    } else if (this.unvotes) {
      const [first, ...others] = this.unvotes.split(',');
      return `Unvote ${first}${others.length ? ` and ${others.length} others...` : ''}`;
    }
  }

  render() {
    return <button class={`btn btn-success ${this.loading ? 'loading' : ''} ${this.showTooltip ? 'tooltip' : ''}`}
                   onClick={this.open}
                   data-tooltip={erroTooltip}>{this.title || this.getDefaultTitle()}</button>
  }
}
