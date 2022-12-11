function isPalindrome (string){
    let string_new = string.replace(/[^\w]/g, '').toLowerCase(); // regular expression
    
    let len = string_new.length;
    let msg = '' 

    for (let i = 0; i < len/2; i++){
        if (string[i] !== string[len - 1 - i]){
            msg = 'bukan palindrom'
        } else {
            msg = 'adalah palindrom'
        }
    }
    console.log(`${string}: ${msg}`);
}

isPalindrome('malam')

// malAM
// Racecar
// Was it a cat i saw
// A man, a plan, a canal, panama