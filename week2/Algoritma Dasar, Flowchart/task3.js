// Validasi yaitu semua nilai tersebut harus diisi.
// Dan juga untuk grade memiliki kondisi dengan ketentuan sebagai berikut:
// 90 - 100 = A
// 80 - 89 = B
// 70 - 79 = C
// 60 - 69 = D
// 0 - 59 = E

function unCalc (matematika, bahasaIndonesia, bahasaInggris, ilmuPengetahuanAlam){

    const average = (matematika+bahasaIndonesia+bahasaInggris+ilmuPengetahuanAlam)/4
    let avg = ''
    let grade = ''

    if (matematika == null || bahasaIndonesia == null || bahasaInggris == null || ilmuPengetahuanAlam == null){
        return warn = 'Semua Nilai Harus Terisi!'
    } else if (average >= 90){
        avg = `Rata-rata = ${average}`
        grade = 'Grade = A'
    } else if (average >= 80){
        avg = `Rata-rata = ${average}`
        grade = 'Grade = B'
    } else if (average >= 70){
        avg = `Rata-rata = ${average}`
        grade = 'Grade = C'
    } else if (average >= 60){
        avg = `Rata-rata = ${average}`
        grade = 'Grade = D'
    } else {
        avg = `Rata-rata = ${average}`
        grade = 'Grade = E'
    }
    return (`${avg}\n${grade}`)
}

console.log(unCalc (80, 85, 90, 89))