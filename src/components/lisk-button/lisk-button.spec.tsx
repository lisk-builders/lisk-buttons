import * as Utils from '../utils/index';

import { LiskButton } from './lisk-button';

Object.defineProperty(window.location, 'href', {
  writable: true,
  value: 'about:blank',
});

const changeUserAgent = agent => navigator['__defineGetter__']('userAgent', () => agent);

describe('LiskButton', () => {
  let component;
  const openURL = jest.spyOn(Utils, 'openURL');

  beforeEach(() => {
    component = new LiskButton();
  });

  afterEach(() => {
    openURL.mockReset();
  });

  it('should build', () => {
    expect(new LiskButton()).toBeTruthy();
  });

  describe('onError()', () => {
    it(`should redirect to ${Utils.appLinks.desktop} if user from desktop`, () => {
      component.onError();
      expect(window.location.href).toBe(Utils.appLinks.desktop);
    });

    // Enable this tests when mobile apps will be allowed
    xit(`should redirect to ${Utils.appLinks.android} if user from android device`, () => {
      changeUserAgent('Android');
      component.onError();
      expect(window.location.href).toBe(Utils.appLinks.android);
    });

    xit(`should redirect to ${Utils.appLinks.ios} if user from IOS device`, () => {
      changeUserAgent('iPhone');
      component.onError();
      expect(window.location.href).toBe(Utils.appLinks.ios);
    });
  });

  describe('openUrl', () => {
    it('should call openURL function with passed param', () => {
      component.openUrl('link');
      expect(openURL).toHaveBeenCalledWith('link', component.onError, component.onSuccess);
    });
  });
});
