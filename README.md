# quick-emoji-pro

`quick-emoji-pro` is a robust npm package designed to streamline text-to-emoji conversion. It offers customizable mappings, various replacement modes, and advanced features suitable for production-grade applications.

## Installation

Install the package via npm:

```bash
npm install quick-emoji-pro
```

Example:

```jsx
const QuickEmojiPro = require('quick-emoji-pro');
const quickEmoji = new QuickEmojiPro();

const text = "You make me smile, and I give you a thumbs_up!";
const emojiText = quickEmoji.replace(text);
console.log(emojiText); // "You make me 😊, and I give you a 👍!"
```

Advance Example:

```jsx
const options = {
    mappings: { laugh: '😂', cool: '😎' },
    mode: 'first',  // Options: 'all', 'first', 'last'
    caseSensitive: true,
    fallback: '🤷',
    logging: true,
};

const quickEmojiPro = new QuickEmojiPro(options);

const customText = "This is so laugh, you're so cool!";
const customEmojiText = quickEmojiPro.replace(customText);
console.log(customEmojiText); // "This is so 😂, you're so cool!"
```

Batch Processing:- Process an array of strings

```jsx
const texts = ["You make me smile.", "I laugh.", "Thumbs up!"];
const quickEmojiPro = new QuickEmojiPro();
const results = quickEmojiPro.batchReplace(texts);
console.log(results); // ["You make me 😊.", "I 😂.", "👍!"]
```


## Options and Configuration
quick-emoji-pro provides a variety of configuration options to tailor its behavior to your specific needs.

# mappings
* Type - Object
* Description - Custom keyword-to-emoji mappings. This allows you to define your own set of replacements.
* Default - {}

Example:

```jsx
const quickEmojiPro = new QuickEmojiPro({
    mappings: { laugh: '😂', cool: '😎' }
});
```

# mode
* Type - String
* Description - Determines how the replacement is applied. Can be set to:
* 'all' - Replace all occurrences of the keyword (default).
* 'first' - Replace only the first occurrence.
* 'last' - Replace only the last occurrence.
* Default - 'all'

Example:

```jsx
const quickEmojiPro = new QuickEmojiPro({}, { mode: 'first' });
```

# caseSensitive
* Type - Boolean
* Description - When set to true, the replacement is case-sensitive.
* Default - false

Example:

```jsx
const quickEmojiPro = new QuickEmojiPro({}, { caseSensitive: true });
```

# fallback
* Type - String
* Description - Emoji or text to replace keywords not found in the mappings.
* Default - '' (no fallback)

Example:

```jsx
const quickEmojiPro = new QuickEmojiPro({}, { fallback: '🤷' });
```

# logging
* Type - Boolean
* Description - Enables logging of replacements for debugging purposes.
* Default - false

Example:

```jsx
const quickEmojiPro = new QuickEmojiPro({}, { logging: true });
```



