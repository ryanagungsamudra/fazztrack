// 10 method bawaan JavaScript (Built-in Functions) 

// 1. find() -> Untuk mencari data pada array (hanya satu hasil)
    // syntax => array.find(function(currentValue, index, arr),thisValue)
    const ages = [3, 10, 18, 20];

    function checkAge(age) {
        return age > 18;
    }
    console.log(ages.find(checkAge))

// 2. sort() -> mengurutkan array (ascending atau descanding)
    // syntax => array.sort(compareFunction)
    const fruits = ["Banana", "Orange", "Apple", "Mango", "Pineaple"];
    console.log(fruits.sort());

    const numbers = [40, 100, 1, 5, 25, 10];
    console.log(numbers.sort(function(a, b){return a-b}))

// 3. reverse() -> Membalikkan array
    // syntax => array.reverse()
    const names = ["Ryan", "Agung", "Bryan", "Samudra", "Aldi"];
    console.log(names.reverse());

// 4. push() -> menambahkan data kedalam array
    // syntax => array.push(item1, item2, ..., itemX)
    const animals = ["Dog", "Cat"]
    animals.push("Buffalo", "Bird")
    console.log(animals[2])

// 5. map() -> Menciptakan array baru dengan fungsi spesifik
    // syntax => array.map(function(currentValue, index, arr), thisValue)
    const persons = [
    {firstname : "Ryan", lastname: "Samudra"},
    {firstname : "Kaylee", lastname: "Frye"},
    {firstname : "Jayne", lastname: "Cobb"}
    ];

    console.log(persons.map(getFullName))

    function getFullName(item) {
    return [item.firstname,item.lastname].join(" ");
    }

// 6. split()
    // syntax => text.split(" ") or ("")
    let text = "Ryan Agung Samudra"
    console.log(text.split(''))
    
// 7. join()
    // syntax => array.join(separator)
    let array = ['R', 'y', 'a', 'n', ' ','A', 'g', 'u', 'n', 'g',' ', 'S', 'a', 'm', 'u', 'd', 'r', 'a']
    console.log(array.join(''))

// 8. forEach()
    // syntax => array.forEach(function(currentValue, index, arr), thisValue)
    const number = [65, 44, 12, 4];
    
    number.forEach(myFunction)
    console.log(number)

    function myFunction(item, index, arr) {
        arr[index] = item * 10;
    }

// 9. concat()
    // syntax => array1.concat(array2, array3, ..., arrayX)
    const arr1 = [1, 2, [3, 4]];
    const arr2 = [[5, 6], 7, 8];
    const arr3 = arr1.concat(arr2);

    console.log(arr3)

// 10. filter() -> mencari data dalam array sesuai kondisi (banyak hasil)
    // syntax => array.filter(function(currentValue, index, arr), thisValue)
    const ages2 = [32, 33, 16, 40];
    const result = ages2.filter(checkAdult);

    console.log(result)

    function checkAdult(age) {
    return age >= 18;
    }