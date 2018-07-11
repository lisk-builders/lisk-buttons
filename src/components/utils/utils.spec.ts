import { getURL } from './index';

describe('Utils', () => {
  describe('getURL', () => {
    it('should build URL for sending funds', () => {
      const amount = 1000;
      const recipient = '15015136092749848942L';
      expect(getURL({ amount, recipient, kind: 'send' })).toBe(
        `lisk://main/transactions/send?recipient=${recipient}&amount=${amount}`
      );
    });
    it('should build URL for delegate voting', () => {
      const unvotes = 'someBadPerson1,someBadPerson2';
      const votes = 'someGoodPerson1,someGoodPerson2';
      expect(getURL({ votes, unvotes, kind: 'vote' })).toBe(
        `lisk://main/voting/vote?unvotes=${unvotes}&votes=${votes}`
      );
    });
  });
});
