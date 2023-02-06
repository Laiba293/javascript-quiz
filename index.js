
function convertAgeToDays(age) {
    return age * 365;
}

// check plenderom 
function checkPalindrome(str) {
    const len = string.length;

    for (let i = 0; i < len / 2; i++) {

        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}
const string = prompt('enter a string or a number');
const value = checkPalindrome(string);
console.log(value);

//----decimal

function decimals(n, d) {
    if ((typeof n !== 'number') || (typeof d !== 'number'))
      return false;
           n = parseFloat(n) || 0;
       return n.toFixed(d);
       }
   console.log(decimals(2.100212, 2));
   console.log(decimals(2.100212, 3));
   console.log(decimals(2100, 2));

   //print even and odd numbers
   for(var a = 1; a <= 100; a++){
    if (a % 2 == 0){
        document.write(a +"<br>");    //for even
    }
   }
   for(var a = 1; a <= 100; a++){
    if (a % 2 != 0){
        document.write(a +"<br>");    //for odd
    }
   }