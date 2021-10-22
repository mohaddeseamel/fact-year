
let app = document.querySelector("#app");

async function getYearFact(year = "random"){
    year = year ? year : "random";
    let response = await fetch(`http://numbersapi.com/${year}/year`);
    let data = await response.text();
    app.textContent = data;
    app.className = "alert alert-success";
}



let form = document.querySelector("form");
form.addEventListener("submit" , e =>{
    e.preventDefault();
    getYearFact(e.target.number.value)
})