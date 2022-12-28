function isValid(s: string): boolean {
    const brackets = {
       '(': ')',
       '[': ']',
       '{': '}',
    };

    const bracketsrev = {
        ')': '(',
        ']': '[',
        '}': '{',
    }

    const flags = {
        '(': 0,
        '[': 0,
        '{': 0,
    }

    const input: string[] = s.split('');
    let stack: string [] = [];
    let error: boolean = false

    input.some((char, i) => {
        flags[char]++;
        flags[bracketsrev[char]]--;
        if(flags[bracketsrev[char]] === -1) {error = true; return true}
        const close = brackets[char];
        if (close) stack.push(close);
        if (stack[stack.length - 1] === char) stack.pop();
        
    });

    if (error) return false;
    if (stack.length === 0) return true;
    return false;

};

