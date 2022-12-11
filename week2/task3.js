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

unCalc (80, 85, 90, 80)