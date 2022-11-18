window.addEventListener("wheel", handleScroll)

let contentWrapper = document.getElementById("contentWrapper")
let scrollTime = "2000"
let denyWait = "1000"
let currentPosition = 1
let positions = 3

changeSelector()

function handleScroll(e) {
    if(e.deltaY > 0){
        window.removeEventListener("wheel", handleScroll)
        handleDownScroll()
    } else if (e.deltaY < 0) {
        window.removeEventListener("wheel", handleScroll)
        handleUpScroll()
    }
}
function handleDownScroll() {
    // If the last content is displayed:
    if (((parseInt(contentWrapper.style.top.replace("vh", "")) || 0) * -1/100 + 1) == document.querySelector(".content-wrapper>div:last-child").id.replace("c", "")) {
        console.log("I can't do this!")
        setTimeout (() => {
            window.addEventListener("wheel", handleScroll)
        }, denyWait)
        return
    }
    //Scrolling down by substracting 100vh from 'top' on content-wrapper
    currentPosition++
    changeSelector()
    contentWrapper.style.top = (parseInt(contentWrapper.style.top.replace("vh", "") || 0) - 100).toString() + "vh"

    setTimeout(() => {
        window.addEventListener("wheel", handleScroll)        
    }, scrollTime)
}
function handleUpScroll() {
    // If the last content is displayed:
    if (((parseInt(contentWrapper.style.top.replace("vh", "")) || 0) * -1/100 + 1) == document.querySelector(".content-wrapper>div:first-child").id.replace("c", "")) {
        console.log("I can't do this!")
        setTimeout (() => {
            window.addEventListener("wheel", handleScroll)
        }, denyWait)
        return
    }
    //Scrolling up by adding 100vh from 'top' on content-wrapper
    currentPosition--
    changeSelector()
    contentWrapper.style.top = (parseInt(contentWrapper.style.top.replace("vh", "") || 0) + 100).toString() + "vh"

    setTimeout(() => {
        window.addEventListener("wheel", handleScroll)        
    }, scrollTime)
}
function changeSelector() {
    document.querySelector("#l" + currentPosition).style.width = "20px"
    document.querySelector("#s" + currentPosition).style.fontWeight = "bold"
    for (let i = 1; i <= positions; i++) {
        if (currentPosition != i) {
            document.querySelector("#l" + i).style.width = "8px"
            document.querySelector("#s" + i).style.fontWeight = "normal"
        }
    }
}
function skipInfo(infoNumber) {
    currentPosition = infoNumber
    contentWrapper.style.top = ((infoNumber-1) * -100).toString() + "vh"
    changeSelector()
}


let b1 = document.getElementById("b1")
let b2 = document.getElementById("b2")

let moreWrapper = document.getElementById("moreWrapper")
let contentH3 = document.querySelector(".more-content h3")
let contentImgs = document.querySelector(".more-content div")

let content = {
    2: {
        h3: "Repercusión en mi persona",
        imgs: ["https://img.freepik.com/premium-vector/documents-confirmed-approved-document_149152-439.jpg?w=2000", "https://img.freepik.com/premium-vector/documents-confirmed-approved-document_149152-439.jpg?w=2000"],
    },
    3: {
        h3: "Evaluación del producto",
        imgs: ["https://img.freepik.com/premium-vector/documents-confirmed-approved-document_149152-439.jpg?w=2000", "https://img.freepik.com/premium-vector/documents-confirmed-approved-document_149152-439.jpg?w=2000"],
    },
}

function displayInfo(buttonNumber) {
    contentH3.innerHTML = content[buttonNumber].h3

    while (contentImgs.firstChild) {
      contentImgs.removeChild(contentImgs.lastChild);
    }
    content[buttonNumber].imgs.forEach(imgURL => {
        let imgElement = document.createElement("img")
        contentImgs.appendChild(imgElement)
        imgElement.setAttribute("src", imgURL)
    });

    moreWrapper.style.opacity = "1"
    moreWrapper.style.visibility = "visible"
}
function closeInfo() {
    moreWrapper.style.opacity = "0"
    setTimeout(() => {
        moreWrapper.style.visibility = "hidden"
    }, 1500)
}



$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
});
history.scrollRestoration = "manual"