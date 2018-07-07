import { Component, State } from '@stencil/core';
import { openURL as checkAndOpen } from '../utils/index';

@Component({
  tag: 'lisk-button'
})
export class LiskButton {
  constructor() {
    this.onSuccess = this.onSuccess.bind(this);
    this.onError = this.onError.bind(this);
  }

  @State() loading: boolean = false;

  public openUrl(url: string): void {
    this.loading = true;
    checkAndOpen(url, this.onError, this.onSuccess)
  }

  private onSuccess(): void {
    this.loading = false;
  }

  private onError(): void {
    this.loading = false;
  }
}

