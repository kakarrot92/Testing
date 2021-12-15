
const capitalize = (string) => {
  const lettersArr = [];
  lettersArr.push(string[0].toUpperCase());
  for(let i = 1; i < string.length; i++) {
    lettersArr.push(string[i]);
  }
  return lettersArr.join('');
};

 const stringLength = (string) => {
    if(string.length < 0 || string.length < 10) {
      
    }
    return string.length;
};

const reverseString = (string) => {
  const reverseArr = [];
  for(let i = string.length - 1; i >= 0; i--) {
    reverseArr.push(string[i]);
  }
  return reverseArr.join('');
};

module.exports = { stringLength , reverseString, capitalize };
