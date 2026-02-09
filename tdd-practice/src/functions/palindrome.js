// isPalindrome(str) - Returns true/ false

export function isPalindrome (words) {
    const reversed = words.split('').reverse().join('');
    if (words === reversed) {
        return true
    };
    return false
}