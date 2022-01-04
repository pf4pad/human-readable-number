module.exports = function toReadable(number) {
  let numberBeforeTen = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',]
  let numberBeforeTwenty = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
  let numberBeforeHundred = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let words = [];
  let humanNumber;
  let i;
  let n = String(number).split('')
  function beforeTen(params) {
    i = Number(params);
    words.push(numberBeforeTen[i])
  }
  function beforeTwenty(params) {
    i = Number(params);
    words.push(numberBeforeTwenty[i])
  }
  function beforeHundred(params) {
    i = Number(params);
    words.push(numberBeforeHundred[i])
  }
  if (n.length === 1) {
    beforeTen(n)
    humanNumber = `${words[0]}`
  }

  if (n.length === 2) {
    if (Number(n[0]) === 1) {
      beforeTwenty(n[1])
      humanNumber = `${words[0]}`
    } else if (Number(n[0]) > 1 && Number(n[1]) === 0) {
      beforeHundred(n[0])
      humanNumber = `${words[0]}`
    } else if (Number(n[0]) > 1) {
      beforeHundred(n[0]);
      beforeTen(n[1])
      humanNumber = `${words[0]} ${words[1]}`
    }
  }

  if (n.length === 3) {
    if (Number(n[1]) === 0 && Number(n[2]) === 0) {
      beforeTen(n[0]);
      humanNumber = `${words[0]} hundred`
    } else if (Number(n[1]) === 0 && Number(n[0]) > 0) {
      beforeTen(n[0]);
      beforeTen(n[2])
      humanNumber = `${words[0]} hundred ${words[1]}`
    } else if (Number(n[1]) === 1) {
      beforeTen(n[0]);
      beforeTwenty(n[2])
      humanNumber = `${words[0]} hundred ${words[1]}`
    } else if (Number(n[1]) > 1 && Number(n[2]) === 0) {
      beforeTen(n[0]);
      beforeHundred(n[1]);
      humanNumber = `${words[0]} hundred ${words[1]}`
    } else if (Number(n[1]) > 1) {
      beforeTen(n[0]);
      beforeHundred(n[1]);
      beforeTen(n[2]);
      humanNumber = `${words[0]} hundred ${words[1]} ${words[2]}`
    }
  }

  return humanNumber
}
