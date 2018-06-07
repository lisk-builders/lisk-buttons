import checURI from '@alepop/check-for-uri-handler';

const liskURL = 'lisk://main';

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

type URLParams = SendLinkParams | VoteLinkParams;

export const getURL = (params: URLParams) => {
  switch(params.kind) {
    case 'send':
      return `${liskURL}/transactions/send?recipient=${params.recipient}&amount=${params.amount}`;
    case 'vote':
      return `${liskURL}/voting/vote?${params.unvotes ? `unvotes=${params.unvotes}` : ''}&${params.votes ? `votes=${params.votes}` : ''}`;
  }
}

export const openURL = (uri: string, failCb: Function, successCb: Function) => checURI(uri, failCb, successCb);

export const errorTooltip = 'You need to install Lisk Nano wallet to use this feature';
