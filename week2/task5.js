// validasi tipe data teks harus string

function vowelsReplace (string){
    // String validation
    if (typeof string != typeof ""){
        return console.log('Tipe data teks harus string!')
    }
    
    // Main function
    let arrString = string.split('')

    let len = arrString.length; //jumlah string yang di input
    let replaceVowels = []

    for (i = 0; i < len; i++){
        if (arrString[i] === 'a'){
            replaceVowels.push('o')
        } else {
            replaceVowels.push(arrString[i])
        }
    }
    let result = replaceVowels.join('')
    console.log(result)
}

vowelsReplace("padang panjang")