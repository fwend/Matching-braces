const MatchingBraces = { '(': ')', '{': '}', '[': ']' };

function checkBraces(s) {
    let result = [];
    for (let i = 0; i < s.length; i++) {

        if (MatchingBraces[s[i]]) {
            result.push(s[i]);

        } else if (s[i] !== MatchingBraces[result.pop()]) {
            return false;
        }
    }
    return result.length === 0;
}