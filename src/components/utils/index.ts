import checURI from '@alepop/check-for-uri-handler';

const liskURL = 'lisk://main';

interface SendLinkParams {
  amount?: number;
  recipient: string;
}

interface VoteLinkParams {
  votes?: string;
  unvotes?: string
}

type linkType = 'send' | 'vote';

type URLParams = SendLinkParams | VoteLinkParams;

export const getURL = (linkType, params) => {
    switch(linkType) {
      case 'send':
        return `${liskURL}/transactions/send?recipient=${params.recipient}&amount=${params.amount}`;
      case 'vote':
        return `${liskURL}/voting/vote?${params.unvotes ? `unvotes=${params.unvotes}` : ''}&${params.votes ? `votes=${params.votes}` : ''}`;
    }
  }

export const openURL = (uri: string, failCb: Function, successCb: Function) => checURI(uri, failCb, successCb);
