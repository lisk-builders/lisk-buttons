import { Component, Prop, State } from '@stencil/core';
import { openURL as checkAndOpen, errorTooltip } from '../utils/index';

@Component({
  tag: 'lisk-button'
})
export class LiskButton {
  constructor() {
    this.onSuccess = this.onSuccess.bind(this);
    this.onError = this.onError.bind(this);
  }

  @State() showTooltip: boolean = false;
  @State() loading: boolean = false;

  public openUrl(url: string): void {
    this.loading = true;
    this.showTooltip = false;
    checkAndOpen(url, this.onError, this.onSuccess)
  }

  public getTooltipText(): string {
    return errorTooltip;
  }

  private onSuccess(): void {
    this.loading = false;
    this.showTooltip = false;
  }

  private onError(): void {
    this.loading = false;
    this.showTooltip = true;
  }
}

