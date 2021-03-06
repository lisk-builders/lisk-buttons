/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface LiskButtonSend {
    'amount': number;
    'buttontitle': string;
    'classnames': string;
    'recipient': string;
  }
  interface LiskButtonSendAttributes extends StencilHTMLAttributes {
    'amount'?: number;
    'buttontitle'?: string;
    'classnames'?: string;
    'recipient'?: string;
  }

  interface LiskButtonSign {
    'buttontitle': string;
    'classnames': string;
    'message': string;
    'sourceId': string;
    'type': string;
  }
  interface LiskButtonSignAttributes extends StencilHTMLAttributes {
    'buttontitle'?: string;
    'classnames'?: string;
    'message'?: string;
    'sourceId'?: string;
    'type'?: string;
  }

  interface LiskButtonVote {
    'buttontitle': string;
    'classnames': string;
    'unvotes': string;
    'votes': string;
  }
  interface LiskButtonVoteAttributes extends StencilHTMLAttributes {
    'buttontitle'?: string;
    'classnames'?: string;
    'unvotes'?: string;
    'votes'?: string;
  }

  interface LiskButton {}
  interface LiskButtonAttributes extends StencilHTMLAttributes {}
}

declare global {
  interface StencilElementInterfaces {
    'LiskButtonSend': Components.LiskButtonSend;
    'LiskButtonSign': Components.LiskButtonSign;
    'LiskButtonVote': Components.LiskButtonVote;
    'LiskButton': Components.LiskButton;
  }

  interface StencilIntrinsicElements {
    'lisk-button-send': Components.LiskButtonSendAttributes;
    'lisk-button-sign': Components.LiskButtonSignAttributes;
    'lisk-button-vote': Components.LiskButtonVoteAttributes;
    'lisk-button': Components.LiskButtonAttributes;
  }


  interface HTMLLiskButtonSendElement extends Components.LiskButtonSend, HTMLStencilElement {}
  var HTMLLiskButtonSendElement: {
    prototype: HTMLLiskButtonSendElement;
    new (): HTMLLiskButtonSendElement;
  };

  interface HTMLLiskButtonSignElement extends Components.LiskButtonSign, HTMLStencilElement {}
  var HTMLLiskButtonSignElement: {
    prototype: HTMLLiskButtonSignElement;
    new (): HTMLLiskButtonSignElement;
  };

  interface HTMLLiskButtonVoteElement extends Components.LiskButtonVote, HTMLStencilElement {}
  var HTMLLiskButtonVoteElement: {
    prototype: HTMLLiskButtonVoteElement;
    new (): HTMLLiskButtonVoteElement;
  };

  interface HTMLLiskButtonElement extends Components.LiskButton, HTMLStencilElement {}
  var HTMLLiskButtonElement: {
    prototype: HTMLLiskButtonElement;
    new (): HTMLLiskButtonElement;
  };

  interface HTMLElementTagNameMap {
    'lisk-button-send': HTMLLiskButtonSendElement
    'lisk-button-sign': HTMLLiskButtonSignElement
    'lisk-button-vote': HTMLLiskButtonVoteElement
    'lisk-button': HTMLLiskButtonElement
  }

  interface ElementTagNameMap {
    'lisk-button-send': HTMLLiskButtonSendElement;
    'lisk-button-sign': HTMLLiskButtonSignElement;
    'lisk-button-vote': HTMLLiskButtonVoteElement;
    'lisk-button': HTMLLiskButtonElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
