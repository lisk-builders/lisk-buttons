import { TestWindow } from '@stencil/core/testing';

import * as Utils from '../utils/index';

import { LiskButtonSend } from './lisk-button-send';

describe('LiskButtonSend', () => {
  it('should build', () => {
    expect(new LiskButtonSend()).toBeTruthy();
  });

  describe('rendering', () => {
    let element;
    let window;
    beforeEach(async () => {
      window = new TestWindow();
      element = await window.load({
        components: [LiskButtonSend],
        html: '<lisk-button-send></lisk-button-send>',
      });
    });

    it('should display title', async () => {
      element.buttonTitle = 'Send';
      await window.flush();
      expect(element.textContent).toEqual('Send');
    });

    it('should display default title', async () => {
      element.buttonTitle = '';
      element.amount = 1000;
      element.recipient = '15015136092749848942L';
      await window.flush();
      expect(element.textContent).toEqual('Send 1000 LSK to 15015136092749848942L');
    });

    it('should call getUrl method on click event', async () => {
      const getURL = jest.spyOn(Utils, 'getURL');
      element.amount = 100;
      element.recipient = '15015136092749848942L';
      await window.flush();
      const btn = element.querySelector('button');
      btn.click();
      expect(getURL)
      .toHaveBeenCalledWith({ recipient: element.recipient, amount: element.amount, kind: 'send' });
    });

    it('should call openURL method on click event', async () => {
      const el = new LiskButtonSend();
      el.openUrl = jest.fn();
      el.open();
      expect(el.openUrl).toHaveBeenCalled();
    });
  });
});
