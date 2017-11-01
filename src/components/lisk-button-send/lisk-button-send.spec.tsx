import { flush, render } from '@stencil/core/testing';
import { LiskButtonSend } from './lisk-button-send';
import { getURL } from '../utils/index'

describe('LiskButtonSend', () => {
  it('should build', () => {
    expect(new LiskButtonSend()).toBeTruthy();
  });

  describe('rendering', () => {
    let element;
    beforeEach(async () => {
      // FIXME: element equal null when component use shadow dom
      LiskButtonSend['metadata']['encapsulation'] = 0;
      element = await render({
        components: [LiskButtonSend],
        html: '<lisk-button-send></lisk-button-send>'
      });
    });

    it('should display title', async () => {
      element.title = 'Send';
      await flush(element);
      expect(element.textContent).toEqual('Send');
    });

    it('should display default title', async () => {
      element.title = '';
      element.amount = 1000;
      element.recipient = "15015136092749848942L";
      await flush(element);
      expect(element.textContent).toEqual('Send 1000 LSK to 15015136092749848942L');
    });

    it('should call getUrl method on click event', async () => {
      getURL = jest.fn();
      element.amount = 100;
      element.recipient = '15015136092749848942L'
      await flush(element);
      const btn = element.querySelector('button');
      btn.click();
      expect(getURL)
      .toHaveBeenCalledWith('send', { recipient: element.recipient, amount: element.amount})
    });

    it('should call openURL method on click event', async () => {
      const el = new LiskButtonSend();
      el.openUrl = jest.fn();
      el.open();
      expect(el.openUrl).toHaveBeenCalled();
    });
  });
});
