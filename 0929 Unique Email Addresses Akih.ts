// Runtime 94 ms Beats 76.47%

function numUniqueEmails(emails: string[]): number {
  let resultEmails = {}

  emails.forEach((email) => {
    let local: string = '';
    let domain: string = '';
    let newlocal: string = '';
    [local, domain] = email.split('@');

    local.split('').every((char, i) => {
      switch (char) {
        case '.':
          break;
        case '+':
          return false;
        default:
          newlocal += char
          break;
      }
      return true;
    })
    resultEmails[newlocal + '@' + domain]++;
  })

  return Object.keys(resultEmails).length;
};
