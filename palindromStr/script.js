function isPalindrom(str){
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g,'').toLowerCase();
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

let val = "vikash";
console.log(isPalindrom("malayalam")) 