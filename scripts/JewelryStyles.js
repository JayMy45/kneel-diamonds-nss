import { getStyles, setStyle } from "./database.js" //needed to add export of getStyles from module database

const styles = getStyles()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "styles") {
            setStyle(parseInt(event.target.value));
        }
    }
)

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "styles") {
            window.alert(`User chose style #${event.target.value}`)
        }
    }
)

export const JewelryStyles = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItemsArray = styles.map(
        (style) => {
            return `<li>
            <input type="radio" name="styles" value="${style.id}"/>${style.style}
            </li>`
        }
    )


    // Join all of the strings in the array into a single string
    html += listItemsArray.join("")

    html += "</ul>"
    return html
}

