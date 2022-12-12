// Validasi yaitu semua nilai tersebut harus diisi.
// Dan juga untuk grade memiliki kondisi dengan ketentuan sebagai berikut:
// 90 - 100 = A
// 80 - 89 = B
// 70 - 79 = C
// 60 - 69 = D
// 0 - 59 = E

function unCalc (matematika, bahasaIndonesia, bahasaInggris, ilmuPengetahuanAlam){

    const average = (matematika+bahasaIndonesia+bahasaInggris+ilmuPengetahuanAlam)/4

    if (matematika == null || bahasaIndonesia == null || bahasaInggris == null || ilmuPengetahuanAlam == null){
        console.log('Semua Nilai Harus Terisi!')
    } else if (average >= 90){
        console.log(`Rata-rata = ${average}`)
        console.log('Grade = A')
    } else if (average >= 80){
        console.log(`Rata-rata = ${average}`)
        console.log('Grade = B')
    } else if (average >= 70){
        console.log(`Rata-rata = ${average}`)
        console.log('Grade = C')
    } else if (average >= 60){
        console.log(`Rata-rata = ${average}`)
        console.log('Grade = D')
    } else {
        console.log(`Rata-rata = ${average}`)
        console.log('Grade = E')
    }
}

unCalc (80, 85, 90, 89)