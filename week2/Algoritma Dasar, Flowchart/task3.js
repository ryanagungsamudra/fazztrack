// Validasi yaitu semua nilai tersebut harus diisi.
// Dan juga untuk grade memiliki kondisi dengan ketentuan sebagai berikut:
// 90 - 100 = A
// 80 - 89 = B
// 70 - 79 = C
// 60 - 69 = D
// 0 - 59 = E

function unCalc (matematika, bahasaIndonesia, bahasaInggris, ilmuPengetahuanAlam){

    const average = (matematika+bahasaIndonesia+bahasaInggris+ilmuPengetahuanAlam)/4
    let subjects = (matematika, bahasaIndonesia, bahasaInggris, ilmuPengetahuanAlam)
    let avg = ''
    let grade = ''

    if (typeof subjects != typeof 1 || average > 100 || average < 0){
        return warn = 'Semua Nilai Harus Terisi dan Logis!'
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
// human error
console.log(unCalc (52, 55, 53)) // Validasi, tdk blh kosong salah satu
console.log(unCalc (101, 101, 101, 101)) // lebih dari 100 atau kurang dari 0
// function test
console.log(unCalc (90, 95, 90, 93))
console.log(unCalc (80, 85, 90, 89))
console.log(unCalc (72, 75, 70, 73))
console.log(unCalc (62, 65, 60, 63))
console.log(unCalc (52, 55, 53, 53))





