 
//  let compose = function(functions){
//     return function(x){
//     let result  = x;
//     for(let i=functions.length-1; i >=0; i--){
//         result = functions[i][result]
//     }
//     return result;
//     }
//  };

let compose = function(functions) {
    return function(x) {
        let result = x;
        for (let i = functions.length - 1; i >= 0; i--) {
            result = functions[i](result);  
        }
        return result;
    }
};

const add2 = (x) => x + 2;
const multiply3 = (x) => x * 3;
const subtract5 = (x) => x - 5;
let composefunc = compose([add2,multiply3,subtract5])
let resultt =  composefunc(5)
console.log(resultt)