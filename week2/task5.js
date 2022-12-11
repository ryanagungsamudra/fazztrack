function vowelsReplace (string){
    let string_new = string.split('')

    let len = string_new.length; //jumlah string yang di input
    let replaceVowels = []

    for (i = 0; i < len; i++){
        const arrContent = string_new[i]
        if (arrContent === 'a'){
            replaceVowels.push('o')
        } else {
            replaceVowels.push(arrContent)
        }
    }
    let result = replaceVowels.join('')
    console.log(result)
}

vowelsReplace('padang panjang')