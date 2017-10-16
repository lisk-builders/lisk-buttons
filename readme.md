# Lisk Buttons
🖲️ Lisk Buttons allow you to open Lisk Nano wallet with pre-filled forms

## Using lisk buttons in your project

# Scrpt tag
- Put a script tag `<script src='https://unpkg.com/@lisk-builders/lisk-buttons/dist/liskbuttons.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc.

# Node Modules
- Run npm install my-name --save
- Put a script tag similar to this `<script src='node_modules/lisk-buttons/dist/liskbuttons.js></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc.

# Send Button
```
<lisk-button-send amount=100 recipient="15015136092749848942L" title="Donate Me" />
```

# Vote Button
```
<lisk-button-vote votes="goodDelegate1,goodDelegate2" unvotes="badDelegate1,badDelegate2" title="Vote" />
```

