var createCounter = function(n) {
    let count = n;  
 
    return function(){
        return count++;
    };
};

const counter = createCounter(10); // Starts counting from 10
console.log(counter()); // 11
console.log(counter()); // 11
console.log(counter()); // 11
