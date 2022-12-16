// node js2_task4.js 

const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
    // Filter array tapi masi acak
        const filterArray = dataArray.filter((number) => number > nilaiAwal && number < nilaiAkhir)
    // Sort array sehingga berurutan
        filterArray.sort(function(a,b){return a-b})

    // Validasi
    if (nilaiAwal < nilaiAkhir && dataArray.length > 5){
        if (filterArray.length > 0){
            return filterArray
        } else {
            return 'Nilai tidak ditemukan'
        }
    } else if (nilaiAwal > nilaiAkhir && dataArray.length > 5){
        return 'Nilai akhir harus lebih besar dari nilai awal'
    } else if (nilaiAwal < nilaiAkhir && dataArray.length < 5){
        return 'Jumlah angka dalam dataArray harus lebih dari 5'
    }
}

console.log(seleksiNilai(5, 20 , [2, 25, 4, 14, 17, 30, 8]))
console.log(seleksiNilai(15, 3 , [2, 25, 4, 14, 17, 30, 8]))
console.log(seleksiNilai(4, 17 , [2, 25, 4]))
console.log(seleksiNilai(5, 17 , [2, 25, 4, 1, 30, 18]))



// // Nilai tidak ditemukan
//     // iterasi array
//     let dataArray = [2, 25, 4, 1, 30, 18]
//     const arrays = dataArray.forEach((value) => value)
//     // create variabel for loops
//     function createVariables(nilaiAwal, nilaiAkhir){
//         let accounts = [];

//         for (let i = nilaiAwal; i <= nilaiAkhir; ++i) {
//             accounts[i] = i;
//         }
//         return accounts;
//     }
//     // compare
//     if (createVariables() != arrays){
//         return console.log('Nilai tidak ditemukan')
//     }