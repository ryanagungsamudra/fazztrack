// Validasi teks harus lebih dari 2 huruf

function isPalindrome (string){
    let string_new = string.replace(/[^\w]/g, '').toLowerCase(); // regular expression
    
    let len = string_new.length;
    let msg = '' 

    for (let i = 0; i < len/2; i++){
        if (len <= 2){
            msg = 'Teks harus lebih dari 2 huruf!'
        } else if (string[i] !== string[len - 1 - i]){
            msg = 'Bukan Palindrome'
        } else {
            msg = 'Palindrome'
        }
    }
    console.log(`${string}: ${msg}`);
}

isPalindrome('ma')

// ma
// malam
// RACEcar
// Was it a cat i saw
// A man, a plan, a canal, panama