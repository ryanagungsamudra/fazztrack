// CONTOH : handle error semaunya, berdasarkan status dari error yang disampaikan. seperti : error 404 not found, dll.

const getUsers = (json) => {
    fetch(json)
        .then((response) => {
            if (response.ok){
                return response.json()
            } else {
                return Promise.reject({
                    status:response.status
                })
            }
        })
        .then(result => {
            result.forEach((res) => {
                console.log(res.name)
            })
        })
        .catch((error) => {
            if (error.status == 404){
                console.log('NOT FOUND BRO, ERROR : ' + error.status)
            }
        })
}
getUsers("https://639fe7117aaf11ceb8a2b9a7.mockapi.io/RealMadridX")

// Untuk menampilkan error pake if else dengan kondisi (json.ok = true or false). Jika false maka masukkan catch error, jika true jalankan perintah