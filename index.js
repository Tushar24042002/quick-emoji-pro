// index.js

const defaultMappings = {
    smile: '😊',
    heart: '❤️',
    thumbs_up: '👍',
    laugh: '😂',
    cool: '😎',
    wink: '😉',
    star: '⭐',
    fire: '🔥',
    clap: '👏',
    party: '🎉',
    cry: '😢',
    angry: '😡',
    surprised: '😮',
    thinking: '🤔',
    sleep: '😴',
    kiss: '😘',
    love: '😍',
    sun: '☀️',
    moon: '🌙',
    coffee: '☕',
    pizza: '🍕',
    cake: '🎂',
    beer: '🍺',
    music: '🎵',
    car: '🚗',
    airplane: '✈️',
    globe: '🌍',
    rocket: '🚀',
    thumbs_down: '👎',
    handshake: '🤝',
    ok_hand: '👌',
    facepalm: '🤦',
    praying: '🙏'
};


const modes = {
    all: (text, regex, emoji) => text.replace(regex, emoji),
    first: (text, regex, emoji) => text.replace(regex, emoji),
    last: (text, regex, emoji) => text.replace(new RegExp(`${regex.source}(?!.*${regex.source})`), emoji),
};

class QuickEmojiPro {
    constructor(customMappings = {}, options = {}) {
        this.mappings = { ...defaultMappings, ...customMappings };
        this.mode = options.mode || 'all';
        this.caseSensitive = options.caseSensitive || false;
        this.fallback = options.fallback || '';
        this.logging = options.logging || false;
        this.customRegex = options.customRegex || null;
    }

    replace(text) {
        let replacedText = text;

        Object.entries(this.mappings).forEach(([keyword, emoji]) => {
            const regexFlags = this.caseSensitive ? 'g' : 'gi';
            const regex = this.customRegex ? this.customRegex(keyword) : new RegExp(`\\b${keyword}\\b`, regexFlags);

            if (regex.test(replacedText)) {
                replacedText = modes[this.mode](replacedText, regex, emoji);
                if (this.logging) {
                    console.log(`Replaced "${keyword}" with "${emoji}"`);
                }
            } else if (this.fallback) {
                replacedText = replacedText.replace(regex, this.fallback);
            }
        });

        return replacedText;
    }

    batchReplace(texts) {
        return texts.map(text => this.replace(text));
    }
}

module.exports = QuickEmojiPro;
