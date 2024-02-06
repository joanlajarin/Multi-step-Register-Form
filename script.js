let stepPage = 1
let nameUser = ""
let emailUser = ""
let topics = []


const btnContinuePage1 = document.getElementById("card-register") 
const nameInput =  document.getElementById("input-name")
const emailInput = document.getElementById("input-email")
btnContinuePage1.addEventListener("submit", event => goToPage2(event))

function goToPage2(event) {
    event.preventDefault()
    nameUser = nameInput.value
    emailUser = emailInput.value

    if(nameUser != "" && emailUser != "") {
        console.log("there is data")
        step = 2
        window.location = 'topics.html'
    } else {
        console.log("no data")
    }
}