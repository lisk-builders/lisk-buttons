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

  describe('getTooltipText()', () => {
    it('should return correct test', () => {
      expect(component.getTooltipText()).toEqual(errorTooltip);
    });
  });

  describe('onSuccess()', () => {
    it('should change loading param to false', () => {
      component.loading = true;
      component.onSuccess();
      expect(component.loading).toBeFalsy();
    });

    it('should change showTooltip param to false', () => {
      component.showTooltip = true;
      component.onSuccess();
      expect(component.showTooltip).toBeFalsy();
    });
  });

  describe('onError()', () => {
    it('should change loading param to false', () => {
      component.loading = true;
      component.onError();
      expect(component.loading).toBeFalsy();
    });

    it('should change showTooltip param to true', () => {
      component.showTooltip = false;
      component.onError();
      expect(component.showTooltip).toBeTruthy();
    });
  });

  describe('openUrl', () => {
    it('should set loading param to true', () => {
      component.loading = false;
      component.openUrl();
      expect(component.loading).toBeTruthy();
    });

    it('should set showTooltip param to false', () => {
      component.showTooltip = true;
      component.openUrl();
      expect(component.showTooltip).toBeFalsy();
    });

    it('should call openURL function with passed param', () => {
      openURL.mockClear();
      component.openUrl('link');
      expect(openURL).toHaveBeenCalledWith('link', component.onError, component.onSuccess)
    })
  });
});
