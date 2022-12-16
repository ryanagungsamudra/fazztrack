// node js2_task3.js

const name = ['Abigail', 'Alexandra', 'Alison', 'Amanda', 'Angela', 'Bella', 'Carol', 'Caroline', 'Carolyn', 'Deirdre', 'Diana', 'Elizabeth', 'Ella', 'Faith', 'Olivia', 'Penelope']

const searchName = (string, number, callback) => {
    let result = name.filter((name) => name.indexOf(string) !== -1);
    result = result.slice(0, number);
    callback(result);
}
const showFilter = (word) => console.log(word)

searchName("an", 3, showFilter);
