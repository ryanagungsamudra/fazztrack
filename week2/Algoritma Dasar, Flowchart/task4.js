// Validasi teks harus lebih dari 2 huruf

function checkPalindrome(string){
    let newString = string.replace(/[^\w]/g, '').toLowerCase();
    let len = newString.length;

    for( let i = 0; i < len/2; i++){
        if (len <= 2){
            return msg = 'Teks harus lebih dari 2 huruf!'
        } else if( newString[i] !== newString[len-1-i]){
            return msg = "Bukan palindrome"
        } 
        return msg = "Palindrome"  
    }
}
console.log(checkPalindrome('malam'))

// ma
// malam
// kasur RUSAK
// A man, a plan, a canal, panama
// 2_A3*3#A2