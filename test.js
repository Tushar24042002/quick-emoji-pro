// test.js

const QuickEmojiPro = require('./index');

const tests = () => {
    const quickEmoji = new QuickEmojiPro();

    console.assert(
        quickEmoji.replace("You make me smile, and I give you a thumbs_up!") === "You make me 😊, and I give you a 👍!",
        "Test 1 Failed"
    );

    const customEmoji = new QuickEmojiPro({ laugh: '😂', cool: '😎' }, { mode: 'first' });
    console.assert(
        customEmoji.replace("This is so laugh, you're so cool!") === "This is so 😂, you're so cool!",
        "Test 2 Failed"
    );

    const caseSensitiveEmoji = new QuickEmojiPro({ laugh: '😂' }, { caseSensitive: true });
    console.assert(
        caseSensitiveEmoji.replace("LAUGH") === "LAUGH",
        "Test 3 Failed"
    );

    console.assert(
        caseSensitiveEmoji.replace("laugh") === "😂",
        "Test 4 Failed"
    );

    console.log("All tests passed!");
};

tests();
