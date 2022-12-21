// Buatlah program menggunakan method fetch untuk menampilkan semua name (hanya name nya saja) dari REST API dibawah ini https://jsonplaceholder.typicode.com/users Gunakan debugger console bawaan browser Chrome untuk melihat hasilnya
const loadData = () => {
    fetch("https://jsonplaceholder.typicode.com/users/")
        .then((response) => {
            if (response.ok){
                return response.json()
            } else {
                return Promise.reject('Check your API url!')
            }
        })
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
        .catch((error) => console.log(`Error : ${error}`))
}
// loadData()


// Mas Tova challenge => pake async/await
const getData = async () => {
    try {
        // fetching
        const response = await fetch("https://jsonplaceholder.typicode.com/users/")
        // error handling
        if (!response.ok) {
            throw new Error(`${response.status}`);
        }
        // tampilkan data
        let userData = []
        userData = await response.json();
        loadUserData(userData)
    } catch (err) {
        console.log(`Waduh error nih guys\n${err}`)
    }
}

const loadUserData = (data) => {
    const output = data.map((el) => {
        return el.name
    })
    console.log(output.join("\n"))
}
// getData()