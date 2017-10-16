import { flush, render } from '@stencil/core/testing';
import { LiskButtonSend } from './lisk-button-send';
import { getURL, openURL } from '../utils/index'

describe('LiskButtonSend', () => {
  it('should build', () => {
    expect(new LiskButtonSend()).toBeTruthy();
  });

  describe('rendering', () => {
    let element;
    beforeEach(async () => {
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
      .toBeCalledWith('send', { recipient: element.recipient, amount: element.amount})
    });

    it('should call openURL method on click event', async () => {
      openURL = jest.fn();
      element.amount = 100;
      element.recipient = '15015136092749848942L'
      await flush(element);
      const btn = element.querySelector('button');
      btn.click();
      expect(openURL).toBeCalled();
    });

    it('should set loading to true on click event', () => {
      const el = new LiskButtonSend();
      el.open();
      expect(el.loading).toBeTruthy();
    });

    it('should set loading to false onSuccess', () => {
      const el = new LiskButtonSend();
      el.open();
      expect(el.loading).toBeTruthy();
      el.onSuccess();
      expect(el.loading).toBeFalsy();
    });

    it('should show tooltip onError', () => {
      const el = new LiskButtonSend();
      expect(el.showTooltip).toBeFalsy();
      el.onError();
      expect(el.showTooltip).toBeTruthy();
    })
  });
});
