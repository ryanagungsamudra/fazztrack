// Validasi teks harus lebih dari 2 huruf

function checkPalindrome(string){
    let newString = string.replace(/[^\w]/g, '').toLowerCase();
    let len = newString.length;
    let msg = ''

    for( let i = 0; i < len/2; i++){
        if (len <= 2){
            return msg = 'Teks harus lebih dari 2 huruf!'
        } else if( newString[i] !== newString[len-1-i]){
            return msg = "Bukan palindrome"
        } 
        return msg = "Palindrome"  
    }
}
console.log(checkPalindrome('ma'))

// ma
// malam malam
// kasur RUSAK
// Was it a cat i saw
// A man, a plan, a canal, panama