let stepPage = 1
let nameUser = ""
let emailUser = ""
let topics = []


const formPage1 = document.getElementById("card-register") 
const topicsPage2 = document.getElementById("card-topics") 
const summaryPage3 = document.getElementById("card-summary") 

const nameInput =  document.getElementById("input-name")
const emailInput = document.getElementById("input-email")

formPage1.addEventListener("submit", event => goToPage2(event))



function goToPage2(event) {
    event.preventDefault()
    nameUser = nameInput.value
    emailUser = emailInput.value

    if(nameUser != "" && emailUser != "") {
        console.log("there is data")
        stepPage = 2
        formPage1.style.display = 'none'
        topicsPage2.style.display = 'flex'
        changeStep()
    } else {
        console.log("no data")
    }
}
const btnPage2 = document.getElementById("btn-page-2")
btnPage2.addEventListener("click", goToPage3)
const topicsNoSelected = document.querySelectorAll(".div-topic-element")
const topicsSelected = document.querySelectorAll(".div-topic-element-selected")

topicsNoSelected.forEach(function(divTopic) {
     divTopic.addEventListener("click", event => selectTopic(event))
})

function selectTopic(event) {
    const topicClicked = event.srcElement
    topicClicked.classList.toggle('active')
    // Check if the button is active and add/remove it from the array accordingly
    let index = topics.indexOf(topicClicked.innerText)
    console.log(index)
     if (index === -1) {
        topics.push(topicClicked.innerText);
    } else {
        topics.splice(index, 1);
    }
}

function goToPage3() {
    if(topics.length > 0) {
        stepPage = 3
        console.log("there is data")
        topicsPage2.style.display = 'none'
        summaryPage3.style.display = 'flex'
        changeDataPage3()
        changeStep()
    } else {
        window.alert("select a topic!")
    }
}

function changeDataPage3() {
    const nameTag = document.getElementById("name-tag")
    const emailTag = document.getElementById("email-tag")
    let topicTag = document.getElementById("list-topic-tag")
    nameTag.innerHTML = nameUser
    emailTag.innerHTML = emailUser
    topics.map( topic => {
        topicTag.innerHTML += `<li class="tag-content">${topic}</li>`
    })

}
const spanStep = document.querySelector(".span-step")
const circleOutside = document.querySelectorAll(".circle-step-steped")
const circleInside = document.querySelectorAll(".circle-step")

changeStep()
function changeStep() {
    const focusCircleInside = circleInside[stepPage - 1]
    const focusCircleOutside = circleOutside[stepPage - 1]
    focusCircleInside.classList.toggle('active')
    focusCircleOutside.classList.toggle('active')
    if(stepPage > 1) {
        const focusCircleOutsidePrev = circleOutside[stepPage - 2]
        focusCircleOutsidePrev.classList.toggle('active')
    }

    spanStep.innerHTML = `Step ${stepPage} of 3`



}