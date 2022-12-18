const endpoint = "https://jsonplaceholder.typicode.com/users/"
fetch(endpoint)
    .then((data) => data.json())
    .then((result) => {
        result.forEach(res => {
            console.log(res.name)
        });
    })
