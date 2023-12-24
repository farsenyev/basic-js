const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor() {
  }
  encrypt(text, key) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!text || !key) throw new Error('Incorrect arguments!');
    const newKey = key.padEnd(text.length, key).toUpperCase();
    text = text.toUpperCase()
    let res = ''
    let j = 0;
    for (let i = 0; i < text.length; i++){
      const num1 = text[i].charCodeAt(0) - 65
      if (num1 >= 0 && num1 < 26){
        const num2 = newKey[j].charCodeAt(0) - 65
        const newLetNum = (num1 + num2) % 26
        const newLet = String.fromCharCode(newLetNum + 65)
        res += newLet
        j++
      }else{
        res += String.fromCharCode(num1 + 65)
      }
    }
    return res
  }
  decrypt(text, key) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!text || !key) throw new Error('Incorrect arguments!');
    const newKey = key.padEnd(text.length, key).toUpperCase()
    text = text.toUpperCase()
    let res = ''
    let j = 0;
    for (let i = 0; i < text.length; i++){
      const num1 = text[i].charCodeAt(0) - 65
      if (num1 >= 0 && num1 < 26){
        const num2 = newKey[j].charCodeAt(0) - 65
        const newLetNum = (num1 - num2) % 26
        let newLet
        if (newLetNum < 0){
          newLet = String.fromCharCode(newLetNum + 91)
        }else {
          newLet = String.fromCharCode(newLetNum + 65)
        }
        res += newLet
        j++
      }else{
        res += String.fromCharCode(num1 + 65)
      }
    }
    return res
  }
}

module.exports = {
  VigenereCipheringMachine
};
