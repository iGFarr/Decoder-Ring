const caesarModule = (function () {

  function caesar(input, shift, encode = true) {
    if(!shift || shift === 0 || shift < -25 || shift > 25){
      return false;
    }
    
    if(encode === false){
      shift = shift * (-1);
    }

    let inputArray = [...input.toLowerCase()];
  
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q",
    "r","s","t","u","v","w","x","y","z"];
    let result = [];

    inputArray.forEach((letter) => {

      for(let i = 0; i < alphabet.length; i++){
        if(letter === alphabet[i]){
          let newIndex = shift + i;
          if((newIndex) >= 0 && (newIndex) <= 25){
          result.push(alphabet[newIndex])
          }
          else if((newIndex) < 0){
            result.push(alphabet[newIndex+26]);
          }
          else if((newIndex) > 25){
            result.push(alphabet[newIndex-26]);
          }
        }
      }
      if(!alphabet.includes(letter)){
        result.push(letter);
      }
    })
    
    return result.join("");
  }
  
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };