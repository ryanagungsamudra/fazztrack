// Perbedaan variabel let var const di javacript serta scopenya

// 1. Deklarasi Ulang dan Perubahan Nilai

    // Variabel var
        // Dapat dideklarasikan ulang
        var fullName = "Ryan Agung Samudra"
        var fullName = "Mahardika Yurico Bilian" // Success 
        // Dapat diperbarui
        var fullName = "Ryan Agung Samudra"
        fullName = "Mahardika Yurco Bilian" // Success

    // Variabel let
        // Tidak dapat dideklarasikan ulang
        let fullName = "Ryan Agung Samudra"
        let fullName = "Mahardika Yurico Bilian" // Error
        // Dapat diperbarui
        let fullName = "Ryan Agung Samudra"
        fullName = "Mahardika Yurco Bilian" // Success
        
    // Variabel const
        // Tidak dapat dideklarasikan ulang 
        const fullName = "Ryan Agung Samudra"
        const fullName = "Mahardika Yurico Bilian" // Error
        // Tidak dapat diperbarui
        const fullName = "Ryan Agung Samudra"
        fullName = "Mahardika Yurco Bilian" // Error

// 2. Hoisting

    // Variabel var
        // Variabel var di naikkan ke atas scope nya dan diinisialisasi dengan nilai undefined
            // jika code nya ditulis seperti ini : 
            console.log(sayHello)
            var sayHello = "Hello guys"
            // dapat diartikan seperti ini :
            var sayHello 
            console.log(sayHello) // sayHello akan menjadi undefined
            sayHello = "Hello guys"

    // Variabel let
        // Tidak seperti var yang akan terinisialisasi undefined, let  tidak akan terinisialisasi.
            console.log(sayHello) // error
            let sayHello = "Hello guys"

    // Variabel const
        // Seperti layaknya  let, const pendeklarasian nya akan dinaikkan ke atas tapi tidak akan diinisialisasi.
            console.log(sayHello) // error
            const sayHello = "Hello guys"

// 3. Block Scope dan Function Scope

    // Variabel var
        // Global scope
        var sayHello = "hello" 
        var name = true

        if (name = true){
        console.log(sayHello)
        }
        // Function scope
        function newFunction(){
            var name = "Ryan"
            console.log(name) // success
        }
        console.log(name) // error

    // Variabel let
        // Block scope
        let angka = 4
        if (angka > 3){
            let sayHello = "Hello"
            console.log(sayHello) // Success
        }
        console.log(sayHello) // Error
        // Function scope
        function hello (){
            let hello = "Hello"
            console.log(hello) // Success
        }
        console.log(hello) // Error

    // Variabel const
        // Block scope
        const angka2 = 4
        if (angka2 > 3){
            const sayHello = "Hello"
            console.log(sayHello) // Success
        }
        console.log(sayHello) // Error
        // Function scope
        function hello (){
            const hello = "Hello"
            console.log(hello) // Success
        }
        console.log(hello) // Error 
        