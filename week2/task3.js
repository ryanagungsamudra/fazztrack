// Validasi yaitu semua nilai tersebut harus diisi.
// Dan juga untuk grade memiliki kondisi dengan ketentuan sebagai berikut:
// 90 - 100 = A
// 80 - 89 = B
// 70 - 79 = C
// 60 - 69 = D
// 0 - 59 = E

function unCalc (matematika, bahasaIndonesia, bahasaInggris, ilmuPengetahuanAlam){

    const average = (matematika+bahasaIndonesia+bahasaInggris+ilmuPengetahuanAlam)/4
    let warning = ''
    let msgAverage = ''
    let msgGrade = ''

    if (matematika == null || bahasaIndonesia == null || bahasaInggris == null || ilmuPengetahuanAlam == null){
        warning = 'Semua Nilai Harus Terisi!'
    } else if (average >= 90){
        msgAverage = `Rata-rata = ${average}`
        msgGrade = 'Grade = A'
    } else if (average >= 80){
        msgAverage = `Rata-rata = ${average}`
        msgGrade = 'Grade = B'
    } else if (average >= 70){
        msgAverage = `Rata-rata = ${average}`
        msgGrade = 'Grade = C'
    } else if (average >= 60){
        msgAverage = `Rata-rata = ${average}`
        msgGrade = 'Grade = D'
    } else {
        msgAverage = `Rata-rata = ${average}`
        msgGrade = 'Grade = E'
    }
    console.log(warning);
    console.log(msgAverage);
    console.log(msgGrade);
    
}

unCalc (80, 85, 90, 89)