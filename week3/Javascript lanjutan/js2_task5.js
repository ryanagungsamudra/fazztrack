// node js2_task5.js

let data = {
    id : 1,
    name : 'Leanne Graham',
    username : 'Bret',
    email : 'Sincere@april.biz',
    address : {
        street : 'Kulas Light',
        suite : 'Apt. 556',
        city : 'Gwenborough',
        zipcode : '92998-3874',
    },
    phone : '1-770-736-8031 x56442',
    website : 'hildegard.org',
}

// A. Mengubah data menggunakan spread operator
let newData = {...data}

newData.name = 'Ryan Agung Samudra'
newData.email = 'ryansamudra67@gmail.com'
newData.hobby = 'Playing guitar, Reading, Basketball'

console.log(newData)

// B. Ambilah data “street dan city” tersebut menggunakan destructuring
const {address} = data

console.log(`Street : ${address.street}`)
console.log(`City : ${address.city}`)