// PROGRAM 1 (than catch) : Menampilkan list biodata pemain Madrid dari API
let getUsers = (json) => {
	fetch(json)
		.then((data) => data.json())
		.then((result) => {
			result.forEach(res => {
				console.log(res.name, res.age, res.nation)
			})
		})
		.catch((err) => console.log(err))
}
// getUsers("https://639fe7117aaf11ceb8a2b9a7.mockapi.io/RealMadrid")

// PROGRAM 2 (try catch): pembatasan umur ketika masuk website
const ageRestricted = async (age) => {
	try {
		// condition   
		if (await age >= 21) {
			console.log(`Your age is ${age}. You can enter`)
		}
		// custom error
		if (age == "") throw "You didn't enter anything!"
		if (isNaN(age)) throw age + " isn't a number"
		if (age < 21) throw "Your need to be 21+ to enter!"
	}
	catch (error) {
		console.log(error)
	}
	finally {
		console.log("Thanks for visitting")
	}
}
// ageRestricted(23)
// ageRestricted(20)
// ageRestricted("Ryan Agung")
// ageRestricted("")
