// PROGRAM 1
// https://codesyariah122.github.io/javascript-promise/

let success = true;

const Promises = new Promise((resolve, reject) => {
	if(success){
		resolve('promises has been kept')
	}else{
		reject('promise not kept')
	}
})

Promises
.then(res => console.log(`Ok ${res} !`))
.catch(res => console.log(`Its Ok ! ${res}`))

// PROGRAM 2
const endpoint = "https://gist.githubusercontent.com/Phonbopit/1d0a87c56066c4bcf043/raw/f95eb3e1196bc8d9a38bebba4f104bcc6e51ac38/Player.json"
fetch(endpoint)
