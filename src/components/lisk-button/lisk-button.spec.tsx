import { LiskButton } from './lisk-button';

import { appLinks, openURL } from '../utils/index';

Object.defineProperty(window.location, 'href', {
  writable: true,
  value: 'about:blank',
});

const changeUserAgent = agent => navigator['__defineGetter__']('userAgent', () => agent);

describe('LiskButton', () => {
  let component;
  openURL = jest.fn();

  beforeEach(() => {
    component = new LiskButton();
  });

  afterEach(() => {
    openURL.mockRestore();
  });

  it('should build', () => {
    expect(new LiskButton()).toBeTruthy();
  });

  describe('onError()', () => {
    it(`should redirect to ${appLinks.desktop} if user from desktop`, () => {
      component.onError();
      expect(window.location.href).toBe(appLinks.desktop);
    });

    // Enable this tests when mobile apps will be allowed
    xit(`should redirect to ${appLinks.android} if user from android device`, () => {
      changeUserAgent('Android');
      component.onError();
      expect(window.location.href).toBe(appLinks.android);
    });

    xit(`should redirect to ${appLinks.ios} if user from IOS device`, () => {
      changeUserAgent('iPhone');
      component.onError();
      expect(window.location.href).toBe(appLinks.ios);
    });
  });

  describe('openUrl', () => {
    it('should call openURL function with passed param', () => {
      openURL.mockClear();
      component.openUrl('link');
      expect(openURL).toHaveBeenCalledWith('link', component.onError, component.onSuccess)
    })
  });
});
