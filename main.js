const MatchingBraces = { '(': ')', '{': '}', '[': ']' };

function checkBraces(s) {
    let prevBraces = [];
    
    for (let i = 0; i < s.length; i++) {

        if (MatchingBraces[s[i]]) {
            prevBraces.push(s[i]);

        } else if (s[i] !== MatchingBraces[prevBraces.pop()]) {
            return false;
        }
    }
    return prevBraces.length === 0;
}
