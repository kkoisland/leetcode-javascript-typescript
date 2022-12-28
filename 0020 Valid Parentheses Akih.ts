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

    input.some((char, i) => {
        flags[char]++;
        flags[bracketsrev[char]]--;
        if(flags[bracketsrev[char]] === -1) {stack = ['1']; return true}
        const close = brackets[char];
        if (close) stack.push(close);
        if (flags[char] === 0 && brackets[char] !== '') {stack = ['1']; return true}
        if (stack[stack.length - 1] === char) stack.pop();
        
   });

   if (stack.length === 0) return true;
   return false;

};

