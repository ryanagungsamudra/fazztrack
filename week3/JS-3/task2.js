const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
                let cek = dataDay.find((item) => {
                    return item === day
                })
            if (cek) {
                resolve(cek)
            } else {
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 3000)
    })
}

// Then catch
// cekHariKerja('selasa')
//     .then(res => console.log(res, 'adalah hari kerja'))
//     .catch(e => console.log(e))

// try catch
// (async () => {
//     try {
//     let result = await cekHariKerja('senin')
//         console.log(result, 'adalah hari kerja')
//     } catch(e) {
//         console.log(e)
//     }
// })()