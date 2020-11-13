const getWordLengths = function (someWords) {
    return someWords.map(word => word.length);
    // Ik had const output = someWords.length
};

module.exports = getWordLengths;