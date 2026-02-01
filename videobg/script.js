 console.log("Hello, World!");
 let x = 10;
    let y = 20;
    console.log("Sum:", x + y);
    function greet(name) {
        return `Hello, ${name}!`;
    }
    console.log(greet("Vikash"));


    // palindrome check 
       function isPalindrome(str) {
        const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
        const reversedStr = cleanedStr.split('').reverse().join('');
        return cleanedStr === reversedStr;
    }
    console.log(isPalindrome("malayalam")); // true
    console.log(isPalindrome("hello")); // false
    console.log(isPalindrome("darkGreen"))

    // reverse a number program
    function reverseNumber(num) {
        const reversedNum = parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num);
        return reversedNum;
    }
console.log(reverseNumber(543))


// factorial of a number
function factorial(n) {
    if (n < 0) return -1; // Factorial not defined for negative numbers 
    if (n === 0) return 1; // Base case
    return n * factorial(n - 1); // Recursive case
}

console.log(factorial(5)); // Output: 120
console.log(factorial(0)); // Output: 1
console.log(factorial(-3)); // Output: -1
console.log(factorial(3)); // Output: 6

console.log("Script executed successfully.");

// ab m video code likhunga
const btn = document.querySelector(".btn");
const video = document.querySelector(".background-video");

const fa = document.querySelector(".fa")


btn.addEventListener("click",()=>{
    if(btn.classList.contains("pause")){
btn.classList.remove("pause");
   video.play();
    fa.classList.add("fa-pause");
    fa.classList.remove("fa-play");

    } else {
        btn.classList.add("pause");
        video.pause();
           
    fa.classList.remove("fa-pause")
    fa.classList.add("fa-play")
    }
 
})
 
// last 20 MINUTES CODE
// function to toggle dark mode
const dgmodeToggle = document.querySelector(".dark-mode-toggle");
dgmodeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
}); 
 