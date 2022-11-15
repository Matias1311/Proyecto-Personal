const head = document.getElementById("head")
const content = document.getElementById("content")
const demo = document.getElementById("demo")
const footer = document.getElementById("footer")

const options = {
    threshold: 0
}

const contentObserver = new IntersectionObserver(contentCallback, options)
const demoObserver = new IntersectionObserver(demoCallback, options)
const footerObserver = new IntersectionObserver(footerCallback, options)

contentObserver.observe(content)
function contentCallback(entries) {
    const entry = entries[0];
    let contentScrollInterval
    let contentBlockInterval
    if (entry.intersectionRatio > options.threshold){
        console.log("True")
        contentScrollInterval = setInterval(() => {
            content.scrollIntoView({behavior:"smooth"})
        }, 250)
    }
    contentBlockInterval = setInterval(() => {
        if (content.getBoundingClientRect().top == 0) {
            console.log("interval cleared")
            clearInterval(contentScrollInterval)
            clearInterval(contentBlockInterval)
        }
    }, 1000)

}
function demoCallback(entries, observer) {
    demo.scrollIntoView({behavior:"smooth"})
}
function footerCallback(entries, observer) {
    demo.scrollIntoView({behavior:"smooth"})
}
function scrollElementIntoView(element) {
     
}