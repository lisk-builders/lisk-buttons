[![Coverage Status](https://coveralls.io/repos/github/lisk-builders/lisk-buttons/badge.svg?branch=master)](https://coveralls.io/github/lisk-builders/lisk-buttons?branch=master)

<div align="center">
  <img alt="Lisk Buttons" src="https://rawgit.com/lisk-builders/lisk-buttons/master/logo.svg" height="191px" />
</div>

🖲️ Lisk Buttons is a web component built using [Stencil](https://stenciljs.com/) that provides you with re-usable buttons for sending Lisk payments and receiving votes.

## Using lisk buttons in your project

# Script tag
- Put a script tag `<script src='https://unpkg.com/@lisk-builders/lisk-buttons@0.6.0/dist/liskbuttons.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc.

# Node Modules
- Run `npm install @lisk-builders/lisk-buttons --save`
- Put a script tag similar to this `<script src='node_modules/lisk-buttons/dist/liskbuttons.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc.

# Send Button

### Params:
 - amount: the amount of LSK the that should be sent
 - recipient: the address the LSK should be sent to
 - button-title: The text that appears on the button

```
<lisk-button-send amount=100 recipient="15015136092749848942L" button-title="Donate Me"></lisk-button-send>
```

# Vote Button

### Params:
 - votes: the list of delegates that should be voted in
 - unvotes: the list delegates that should be unvoted
 - button-title: The text that appears on the button

```
<lisk-button-vote votes="goodDelegate1,goodDelegate2" unvotes="badDelegate1,badDelegate2" button-title="Vote"></lisk-button-vote>
```

# Sign Button

### Params:
- type: `'nano'` or `'hub'` (optional, default is `'hub'`)
- message: the message to sign
- button-title: The text that appears on the button

```
<lisk-button-sign type="hub" message="message to sign" title="Sign it!"></lisk-button-sign>
```

# Examples
[Here!](https://lisk-builders.github.io/lisk-buttons/)
