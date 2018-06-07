import checURI from '@alepop/check-for-uri-handler';

const liskURL = 'lisk://';

interface SendLinkParams {
  kind: 'send';
  amount?: number;
  recipient: string;
}

interface VoteLinkParams {
  kind: 'vote';
  votes?: string;
  unvotes?: string
}

interface SignLinkParams {
  kind: 'sign-hub' | 'sign-nano';
  message?: string
}

type URLParams = SendLinkParams | VoteLinkParams | SignLinkParams;

export const getURL = (params: URLParams) => {
  switch(params.kind) {
    case 'send':
      return `${liskURL}main/transactions/send?recipient=${params.recipient}&amount=${params.amount}`;
    case 'vote':
      return `${liskURL}main/voting/vote?${params.unvotes ? `unvotes=${params.unvotes}` : ''}&${params.votes ? `votes=${params.votes}` : ''}`;
    case 'sign-nano': //there is no support to message pre-fill on lisk-nano...
      return `${liskURL}main/transactions/sign-message`;
    case 'sign-hub':
      return `${liskURL}sign-message?${params.message ? `message=${params.message}` : ''}`;
  }
};

export const openURL = (uri: string, failCb: Function, successCb: Function) => checURI(uri, failCb, successCb);

export const errorTooltip = 'You need to install Lisk Nano wallet to use this feature';
