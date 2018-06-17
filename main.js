const matchingBraces = { '(': ')', '{': '}', '[': ']' };

function groupCheck(s) {
    let result = [];
    for (let i = 0; i < s.length; i++) {

        if (matchingBraces[s[i]]) {
            result.push(s[i]);

        } else if (s[i] !== matchingBraces[result.pop()]) {
            return false;
        }
    }
    return result.length === 0;
}