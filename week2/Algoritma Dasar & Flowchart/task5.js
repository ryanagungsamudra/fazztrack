// validasi tipe data teks harus string

function vowelsReplace (string){
    // String validation
    if (typeof string != typeof 'string'){
        let msg = 'Tipe data teks harus string dan tidak boleh kosong!'
        return msg; 
    }
    
    // Main function
    let arrString = string.toLowerCase().split('')
    let len = arrString.length; //jumlah string yang di input
    let newArr = []

    for (i = 0; i < len; i++){
        if (arrString[i] === 'a'){
            newArr.push('o')
        } else {
            newArr.push(arrString[i])
        }
    }
    let result = newArr.join('')
    return result;
}

console.log(vowelsReplace("PADANG dan SurAbaya"))

// null
// undefined
// 123
// true
// false
