import { LiskButton } from './lisk-button'
import { openURL, errorTooltip } from '../utils/index';

describe('LiskButton', () => {
  let component;
  openURL = jest.fn();

  beforeAll(() => {
    component = new LiskButton();
  });

  afterAll(() => {
    openURL.mockRestore();
  })

  it('should build', () => {
    expect(new LiskButton()).toBeTruthy();
  })

  describe('onSuccess()', () => {
    it('should change loading param to false', () => {
      component.loading = true;
      component.onSuccess();
      expect(component.loading).toBeFalsy();
    });
  });

  describe('onError()', () => {
    it('should change loading param to false', () => {
      component.loading = true;
      component.onError();
      expect(component.loading).toBeFalsy();
    });
  });

  describe('openUrl', () => {
    it('should set loading param to true', () => {
      component.loading = false;
      component.openUrl();
      expect(component.loading).toBeTruthy();
    });

    it('should call openURL function with passed param', () => {
      openURL.mockClear();
      component.openUrl('link');
      expect(openURL).toHaveBeenCalledWith('link', component.onError, component.onSuccess)
    })
  });
});
