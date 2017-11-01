import { flush, render } from '@stencil/core/testing';
import { LiskButtonVote } from './lisk-button-vote';
import { getURL } from '../utils/index'

describe('LiskButtonVote', () => {
  it('should build', () => {
    expect(new LiskButtonVote()).toBeTruthy();
  });

  describe('rendering', () => {
    let element;
    beforeEach(async () => {
      element = await render({
        components: [LiskButtonVote],
        html: '<lisk-button-vote></lisk-button-vote>'
      });
    });

    it('should display title', async () => {
      element.title = 'Vote';
      await flush(element);
      expect(element.textContent).toEqual('Vote');
    });

    it('should display default title for 1 vote', async () => {
      element.title = '';
      element.votes = 'good1'
      await flush(element);
      expect(element.textContent).toEqual('Vote for good1');
    });

    it('should display default title', async () => {
      element.title = '';
      element.votes = 'good1,good2,good3'
      await flush(element);
      expect(element.textContent).toEqual('Vote for good1 and 2 others...');
    });

    it('should display default title for unvote', async () => {
      element.title = '';
      element.votes = ''
      element.unvotes = 'bad1,bad2,bad3'
      await flush(element);
      expect(element.textContent).toEqual('Unvote bad1 and 2 others...');
    });

    it('should display default title for 1 unvote', async () => {
      element.title = '';
      element.votes = ''
      element.unvotes = 'bad1'
      await flush(element);
      expect(element.textContent).toEqual('Unvote bad1');
    });


    it('should call getUrl method on click event', async () => {
      getURL = jest.fn();
      element.unvotes = 'bad1';
      element.votees = 'good1'
      await flush(element);
      const btn = element.querySelector('button');
      btn.click();
      expect(getURL)
        .toBeCalledWith('vote', { votes: element.votes, unvotes: element.unvotes})
    });

    it('should call openURL method on click event', async () => {
      const el = new LiskButtonVote();
      el.openUrl = jest.fn();
      el.open();
      expect(el.openUrl).toHaveBeenCalled();
    });
  });
});
