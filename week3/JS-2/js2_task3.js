// node js2_task3.js

const name = ['Abigail', 'Alexandra', 'Alison', 'Amanda', 'Angela', 'Bella', 'Carol', 'Caroline', 'Carolyn', 'Deirdre', 'Diana', 'Elizabeth', 'Ella', 'Faith', 'Olivia', 'Penelope']

const searchName = (string, number, callback) => {
    let result = name.filter((name) => name.toLowerCase().indexOf(string) != -1);
    result = result.slice(0, number);
    callback(result);
}
const showFilter = (word) => console.log(word)

searchName("an", 3, showFilter);


// const searchName = (word,limit,callback)=>{
//     const name = [
//         'Abigail', 'Alexandra', 'Alison',
//         'Amanda', 'Angela', 'Bella',
//         'Carol', 'Caroline', 'Carolyn',
//         'Deirdre', 'Diana', 'Elizabeth',
//         'Ella', 'Faith', 'Olivia', 'Penelope'
//     ]

//     const index = name.map(element => {return element.toLowerCase()});
//     const search = index.filter(check=> check.includes(word));
//     const slice = search.slice(0,limit)
//     const sorting = slice.sort()
//     return callback(sorting)
//     }

//     const callback =(data)=>{
//         console.log(data)
//     }
//      searchName('an',3,callback) //output ['alexandra','amanda', 'angela] 
//      searchName('a',12,callback) // ['abigail',   'alexandra', 'alison',    'amanda', 'angela',    'bella', 'carol',     'caroline', 'carolyn',   'diana','elizabeth', 'ella']


