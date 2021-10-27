const polybiusModule = (function () {

  function checkForNums(input){
    const inputArray = [...input.toLowerCase()];
    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
    const spacesRemoved = inputArray.filter((char) => (char != " "));

    if(spacesRemoved.length % 2 != 0 && spacesRemoved.every((char) => numbers.includes(char))){
      return null;
    }

    else if(spacesRemoved.length % 2 === 0 && spacesRemoved.every((char) => numbers.includes(char))){
      return true;
    }

    else{
      return false;
    }
  }

  function polybius(input, encode = true) {
    const inputArray = [...input.toLowerCase()];
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q",
    "r","s","t","u","v","w","x","y","z"];

     const grid = [{1: "a", 2: "f", 3: "l", 4: "q", 5: "v"},
                   {1: "b", 2: "g", 3: "m", 4: "r", 5: "w"},
                   {1: "c", 2: "h", 3: "n", 4: "s", 5: "x"},
                   {1: "d", 2: "(i/j)", 3: "o", 4: "t", 5: "y"},
                   {1: "e", 2: "k", 3: "p", 4: "u", 5: "z"}];

     let result = [];
     if(checkForNums(input) === null){
       return false;
     }
     
     if(encode === false && checkForNums(input) === true){
        for(let i = 0; i < inputArray.length; i += 2){
          if(inputArray[i] === " "){
            result.push(inputArray[i]);
            i -= 1;
          }
          else{
            gridLetter = grid[inputArray[i]-1][inputArray[i+1]];
            result.push(gridLetter);
          }
      }
      return result.join("");
    }
     inputArray.forEach((letter) => {

       if(letter === "i" || letter === "j"){
         result.push("42")
       }

       if(!alphabet.includes(letter)){
         result.push(letter);
       }

       for(let i = 0; i < grid.length; i++){
          for(let j = 0; j < (Object.keys(grid[i]).length + 1); j++){
            if(grid[i][j] === letter){
              result.push(`${i+1}${j}`)
            }
          }
       }
     })
     return result.join("");
  }
  
  return {
    polybius,
  };
})();


module.exports = { polybius: polybiusModule.polybius };
