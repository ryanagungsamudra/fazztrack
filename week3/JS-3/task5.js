// Buatlah program menggunakan method fetch untuk menampilkan semua name (hanya name nya saja) dari REST API dibawah ini https://jsonplaceholder.typicode.com/users Gunakan debugger console bawaan browser Chrome untuk melihat hasilnya

const loadData = (json) => {
    fetch(json)
        .then((response) => response.json())
        .then((data) => {
            let output = ''
            let no = 1
            data.forEach(element => {
                output += `
                <tr>
                    <td> ${no++} </td>
                    <td> ${element.name} </td>
                    <td> ${element.username} </td>
                    <td> ${element.email} </td>
                    <td> ${element.address.city} </td>
                </tr>    
                `
                console.log(element.name)
            })
            document.querySelector('tbody').innerHTML = output
        })
}
loadData("https://jsonplaceholder.typicode.com/users/")