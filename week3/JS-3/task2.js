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
// cekHariKerja('senin')
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

// PENGGUNAAN THEN CATCH & TRY CATCH
// Didalam javascript terdapat 2 cara utama untuk mengatasi (handle) asynchronous, yakni menggunakan then/catch (ES6) dan async/await (ES7). Untuk penggunaannya yakni tergantung bagaimana kita ingin meng-handle promise. Jika menggunakan await maka tinggal diinput kedalam try/catch, apabila tidak menggunakan await maka gunakan .then() kemudian .catch().