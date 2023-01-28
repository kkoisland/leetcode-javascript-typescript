function lengthOfLongestSubstring(s: string): number {
    const array: string[] = s.split('');
    const uniq: string[] = [...new Set(array)];

    let answer: number  = 0;
    let goodanswer: number = 0;
    let i: number = 0;
    let buffer: string[] = [];
    let boom: boolean;

    if (s === '') return 0;

    while (answer < uniq.length && i < array.length - 1) {
        boom = false;
        buffer = [];
        answer = 0;
        while (!boom && i + answer + 1 < array.length) {
            buffer.push(array[i + answer]);
            if (buffer.find(e => e === array[i + answer + 1])) boom = true;
            else answer++
        }
        goodanswer = goodanswer < answer ? answer : goodanswer;
        i++;
    }

    return goodanswer + 1;
};
