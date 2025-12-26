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