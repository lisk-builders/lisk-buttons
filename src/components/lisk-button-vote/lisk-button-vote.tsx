import { Component, Prop } from '@stencil/core';

import { LiskButton } from '../lisk-button/lisk-button';
import { getURL } from '../utils/index';

@Component({
  tag: 'lisk-button-vote',
})
export class LiskButtonVote extends LiskButton {
  constructor() {
    super();
  }

  @Prop() unvotes: string;
  @Prop() votes: string;
  @Prop() buttonTitle: string;
  @Prop() classNames = 'lisk-btn-vote-wrapper';

  private open = (): void => {
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

  hostData() {
    return super.hostData(this.classNames);
  }

  render() {
    return <button onClick={this.open}>{this.getTitle()}</button>;
  }
}
