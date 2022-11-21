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



$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
});
history.scrollRestoration = "manual"