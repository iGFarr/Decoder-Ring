// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {

  function substitution(input, alphabet, encode = true) {
    if(!alphabet || alphabet.length !== 26){
      return false;
    }

    for(let i = 0; i < alphabet.length - 1; i++){
      for(let j = i + 1; j < alphabet.length; j++){
        if(alphabet[i] === alphabet[j]){
          return false;
        }
      }
    }
  }


console.log(substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev")); //> 'jrufscpw'
console.log(substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev")); //> 'elp xhm xf mbymwwmfj dne'
console.log(substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false)); //> 'thinkful'

console.log(substitution("message", "$wae&zrdxtfcygvuhbijnokmpl")); //> "y&ii$r&"
console.log(substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false)); //> "message"

console.log(substitution("thinkful", "short")); //> false
console.log(substitution("thinkful", "abcabcabcabcabcabcabcabcyz")); //> false
console.log(substitution("message")); // false

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
