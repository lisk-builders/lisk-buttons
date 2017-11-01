import { Component, Prop } from '@stencil/core';
import {  getURL } from '../utils/index';
import { LiskButton } from '../lisk-button/lisk-button';

@Component({
  tag: 'lisk-button-vote',
  styleUrl: '../lisk-button/lisk-button.scss',
  shadow: true
})
export class LiskButtonVote extends LiskButton {
  constructor() {
    super();
    this.open = this.open.bind(this);
    this.getDefaultTitle = this.getDefaultTitle.bind(this);
  }

  @Prop() unvotes: string;
  @Prop() votes: string;
  @Prop() title:string;

  open() {
    const { votes, unvotes } = this;
    const url = getURL('vote', { votes, unvotes });
    this.openUrl(url);
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
                   data-tooltip={this.getTooltipText()}>{this.title || this.getDefaultTitle()}</button>
  }
}
