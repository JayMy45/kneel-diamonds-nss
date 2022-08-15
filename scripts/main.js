import { KneelDiamonds } from "./KneelDiamonds.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = KneelDiamonds()
}

renderAllHTML()


//this event listener "listens"  for stateChanged and logs the message below to the console and re-renders the HTML to show the new updates?  How?
document.addEventListener("stateChanged", event => {  //stateChanged refers to custom event listener added/defined in database module.
    console.log("State of data has changed. Regenerating HTML...")  //This should log to console whenever the event takes place.
    renderAllHTML() //creates new HTML with updated log...
})