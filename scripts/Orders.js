import { getMetals, getSizes, getStyles, getOrders } from "./database.js"


const metals = getMetals()
const sizes = getSizes()
const styles = getStyles()


const buildOrderListItem = (order) => {

    // Remember that the function you pass to find() must return true/false
    const foundMetal = metals.find( //dot.find method 
        //this function must include foundMetal (et al) in buildOrderListItem function to work properly...this how it becomes synchronized with whatever is click
        (metal) => {  //(metal) is the element of the dot method
            return metal.id === order.metalId //this conditional(?) returns whichever comparison is truthy...looping(?) through each option until truthy which is then presented to the total variable
        }  //what is returned is directly based off of the choice that was made by the user.
    )

    const foundSize = sizes.find(
        (size) => {
            return size.id === order.sizeId
        }
    )

    const foundStyle = styles.find(
        (style) => {
            return style.id === order.styleId
        }
    )

    const totalCost = foundMetal.price + foundSize.price + foundStyle.price


    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

    return `<li>
        Order #${order.id} was placed on ${costString}
    </li>`                                //{costString} updated the callback to record/print price result...
}

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}

