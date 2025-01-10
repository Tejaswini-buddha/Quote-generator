let h3 = document.querySelector('h3')

function getQuote(){
    fetch("http://api.quotable.io/random")
    .then((res)=>res.json())
    .then((data=>{
        h3.innerHTML = data.content;
    }))
}