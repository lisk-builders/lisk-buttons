import checkURI from '@alepop/check-for-uri-handler';

const liskURL = 'lisk://';

interface SendLinkParams {
  kind: 'send';
  amount?: number;
  recipient: string;
}

interface VoteLinkParams {
  kind: 'vote';
  votes?: string;
  unvotes?: string;
}

interface SignLinkParams {
  kind: 'sign-hub' | 'sign-nano';
  message?: string;
}

type URLParams = SendLinkParams | VoteLinkParams | SignLinkParams;

export const getURL = (params: URLParams) => {
  switch (params.kind) {
    case 'send':
      return `${liskURL}main/transactions/send?recipient=${
        params.recipient
      }&amount=${params.amount}`;
    case 'vote':
      return `${liskURL}main/voting/vote?${
        params.unvotes ? `unvotes=${params.unvotes}` : ''
      }&${params.votes ? `votes=${params.votes}` : ''}`;
    case 'sign-nano': // there is no support to message pre-fill on lisk-nano...
      return `${liskURL}main/transactions/sign-message`;
    case 'sign-hub':
      return `${liskURL}sign-message?${
        params.message ? `message=${params.message}` : ''
      }`;
  }
};

export const openURL = (
  uri: string,
  failCb: () => void,
  successCb: () => void
) => checkURI(uri, failCb, successCb);

export const mobile = {
  isIOS: /iPhone|iPad|iPod/i.test(navigator.userAgent),
  isAndroid: /Android/i.test(navigator.userAgent),
};

export interface AppUrls {
  ios?: string;
  android?: string;
  desktop: string;
}

export const appLinks: AppUrls = {
  desktop: 'https://www.lisk.io/hub',
};
