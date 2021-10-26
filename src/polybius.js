const polybiusModule = (function () {

  function polybius(input, encode = true) {

    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q",
    "r","s","t","u","v","w","x","y","z"];

     const grid = [{1: "a", 2: "f", 3: "l", 4: "q", 5: "v"},
                   {1: "b", 2: "g", 3: "m", 4: "r", 5: "w"},
                   {1: "c", 2: "h", 3: "n", 4: "s", 5: "x"},
                   {1: "d", 2: ["i", "j"], 3: "o", 4: "t", 5: "y"},
                   {1: "e", 2: "k", 3: "p", 4: "u", 5: "z"}];

     const inputArray = [...input.toLowerCase()];
     let result = [];

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

  console.log(polybius("Hello World")); // 3251131343 2543241341

  return {
    polybius,
  };
})();


module.exports = { polybius: polybiusModule.polybius };
