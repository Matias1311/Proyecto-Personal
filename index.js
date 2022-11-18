window.addEventListener("wheel", handleScroll)

let wrapper = document.getElementById("wrapper")
const scrollTime = "2000"
const denyWait = "1000"

let currentPosition = 1
const positions = 4
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
    if (((parseInt(wrapper.style.top.replace("vh", "")) || 0) * -1/100 + 1) == 3.4) {
        console.log("I can't do this!")
        setTimeout (() => {
            window.addEventListener("wheel", handleScroll)
        }, denyWait)
        return
    }
    if (((parseInt(wrapper.style.top.replace("vh", "")) || 0) * -1/100 + 1) == document.querySelector("#wrapper>div:nth-last-child(2)").id.replace("c", "")) {
        currentPosition++
        wrapper.style.top = (parseInt(wrapper.style.top.replace("vh", "") || 0) - 40).toString() + "vh"
    } else {
        //Scrolling down by substracting 100vh from 'top' on content-wrapper
        currentPosition++
        wrapper.style.top = (parseInt(wrapper.style.top.replace("vh", "") || 0) - 100).toString() + "vh"
    }
    changeSelector()

    setTimeout(() => {
        window.addEventListener("wheel", handleScroll)        
    }, scrollTime)
}
function handleUpScroll() {
    // If the last content is displayed:
    if (((parseInt(wrapper.style.top.replace("vh", "")) || 0) * -1/100 + 1) == 1) {
        console.log("I can't do this!")
        setTimeout (() => {
            window.addEventListener("wheel", handleScroll)
        }, denyWait)
        return
    }
    if ((((parseInt(wrapper.style.top.replace("vh", "")) || 0) - 60) * -1/100 + 1) == 4) {
        currentPosition--
        wrapper.style.top = (parseInt(wrapper.style.top.replace("vh", "") || 0) + 40).toString() + "vh"
    } else {
        //Scrolling up by adding 100vh from 'top' on content-wrapper
        currentPosition--
        wrapper.style.top = (parseInt(wrapper.style.top.replace("vh", "") || 0) + 100).toString() + "vh"
    }
    changeSelector()

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
    if(infoNumber == 4) {
        wrapper.style.top = "-240vh"
    } else {
        wrapper.style.top = ((infoNumber-1) * -100).toString() + "vh"
    }
    changeSelector()
}


$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
});
history.scrollRestoration = "manual"