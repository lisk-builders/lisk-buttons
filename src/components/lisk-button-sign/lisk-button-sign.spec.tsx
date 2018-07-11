import { TestWindow } from '@stencil/core/testing';

import { getURL } from '../utils/index';

import { LiskButtonSign } from './lisk-button-sign';

describe('LiskButtonSign', () => {
  it('should build', () => {
    expect(new LiskButtonSign()).toBeTruthy();
  });

  describe('rendering', () => {
    let element;
    let window;
    beforeEach(async () => {
      window = new TestWindow();
      element = await window.load({
        components: [LiskButtonSign],
        html: '<lisk-button-sign></lisk-button-sign>',
      });
    });

    it('should display title', async () => {
      element.buttonTitle = 'Sign';
      await window.flush();
      expect(element.textContent).toEqual('Sign');
    });

    it('should display default title with default wallet (lisk hub)', async () => {
      element.buttonTitle = '';
      element.message = 'try sign default title with hub';
      await window.flush();
      expect(element.textContent).toEqual('Use Lisk Hub to sign the message');
    });

    it('should display default title with nano wallet', async () => {
      element.buttonTitle = '';
      element.type = 'nano';
      element.message = 'try sign default title with nano';
      await window.flush();
      expect(element.textContent).toEqual('Use Lisk Nano to sign the message');
    });

    it('should call getUrl method on click event with default wallet (lisk hub)', async () => {
      getURL = jest.fn();
      element.type = 'wrongtype';
      element.message = 'messageToSign';
      await window.flush();
      const btn = element.querySelector('button');
      btn.click();
      expect(getURL)
      .toHaveBeenCalledWith({ message: element.message, kind: 'sign-hub' });
    });

    it('should call getUrl method on click event with nano wallet', async () => {
      getURL = jest.fn();
      element.type = 'nano';
      element.message = 'messageToSign';
      await window.flush();
      const btn = element.querySelector('button');
      btn.click();
      expect(getURL)
        .toHaveBeenCalledWith({ message: element.message, kind: 'sign-nano' });
    });

    it('should call getUrl method with input value if `sourceId` attribute provided', async () => {
      getURL = jest.fn();
      element.sourceId = 'test-input';
      const message = 'Message from input';

      await window.flush();
      const btn = element.querySelector('button');
      // Can't test with real value from input element.
      // Add input to the jsdom were ununsuccessful, value everytime `undefined`
      // Solution is to mock querySelector that is triggered in the LiskButtonSign.getValue()
      document.querySelector = jest.fn().mockReturnValue({
        value: message,
      });
      btn.click();
      expect(getURL)
        .toHaveBeenCalledWith({ message, kind: 'sign-hub' });
    });

    it('should call openURL method on click event', async () => {
      const el = new LiskButtonSign();
      el.openUrl = jest.fn();
      el.open();
      expect(el.openUrl).toHaveBeenCalled();
    });
  });
});
