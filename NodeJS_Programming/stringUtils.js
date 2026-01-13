function capitalize(str) {
    if (!str || str.length === 0) return str;
    return str[0].toUpperCase() + str.slice(1);
}

function reverse(str) {
    return str.split('').reverse().join('');
}

function countVowels(str) {
    const vowels = str.match(/[aeiouAEIOU]/g);
    return vowels ? vowels.length : 0;
}

module.exports = {
    capitalize,
    reverse,
    countVowels
};
