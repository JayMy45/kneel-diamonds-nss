import { getMetals, setMetal } from "./database.js"

document.addEventListener( //event listener access the DOM
    "change", //the type of event listener is to change...as seen below!
    (event) => {  //need to know more about this damned parameter here.
        if (event.target.name === "metal") { //if the event target name is equal to metal
            setMetal(parseInt(event.target.value)) //then the event target.value (id/metalId/etc.) will be provided as an integer (when was it ever another datatype ('string')?) 
        }                   //This is the parameter being passed through the setMetal function as id.
    }
)

const metals = getMetals()

// document.addEventListener(
//     "change",
//     (event) => {
//         if (event.target.name === "metal") {
//             window.alert(`User chose metal #${event.target.value}`)
//         }
//     }
// )

export const Metals = () => {
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    for (const metal of metals) {
        html += `<li>
            <input type="radio" name="metal" value="${metal.id}" /> ${metal.metal}
        </li>`
    }

    html += "</ul>"
    return html
}

