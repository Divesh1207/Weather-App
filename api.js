fetch("https://api.chucknorris.io/jokes/random?category={category}")
.then((response)=>{
    console.log(response)
})
.catch(err => alert(err))