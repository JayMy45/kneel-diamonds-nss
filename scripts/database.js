/*

    This module contains all of the data, or state, for the
    application. It exports two functions that allow other
    modules to get copies of the state.

*/
const database = {

    //this Object key stores changes to the state of the application as dictated by the users.
    /*Why store in object...?
    1. the key is accessible to users via dotMethod
    2.   strings/numbers aren't iterable
    3. I'm not sure why it cant be stored in a array.
    */

    styles: [
        { id: 1, style: "Classic", price: 500 },
        { id: 2, style: "Modern", price: 710 },
        { id: 3, style: "Vintage", price: 965 }
    ],
    sizes: [
        { id: 1, carets: 0.5, price: 405 },
        { id: 2, carets: 0.75, price: 782 },
        { id: 3, carets: 1, price: 1470 },
        { id: 4, carets: 1.5, price: 1997 },
        { id: 5, carets: 2, price: 3638 }
    ],
    metals: [
        { id: 1, metal: "Sterling Silver", price: 12.42 },
        { id: 2, metal: "14K Gold", price: 736.4 },
        { id: 3, metal: "24K Gold", price: 1258.9 },
        { id: 4, metal: "Platinum", price: 795.45 },
        { id: 5, metal: "Palladium", price: 1241.0 }
    ],
    customOrders: [
        {
            id: 1,
            metalId: 3,
            sizeId: 2,
            styleId: 3,
            timestamp: 1614659931693


        }
    ],

    orderBuilder: [{}]
}

export const getMetals = () => {
    return database.metals.map(metal => ({ ...metal }))
}

export const getSizes = () => {
    return database.sizes.map(size => ({ ...size }))
}

export const getStyles = () => {
    return database.styles.map(style => ({ ...style }))
}
export const getOrders = () => {
    return database.customOrders.map(order => ({ ...order }))
}


//export functions whose responsibility is to set state...
export const setMetal = (id) => {  //parameter to be import "id" from to function...
    database.orderBuilder.metalId = id
}  /* the setMetal function adds a new key "metalId" equal to id using dot.method to 
    add to the orderBuilder key in the database ObjectArray */

export const setSize = (id) => {
    database.orderBuilder.sizeId = id
}

export const setStyle = (id) => {
    database.orderBuilder.styleId = id
}

export const addCustomOrder = () => { //this function will access the DOM and create a new order using the inputs from user.
    //should be invoked whenever the user makes order via click  (in the click eventListener on KneelDiamonds.js/html handler)

    //copy the current state of user choices...
    const newOrder = { ...database.orderBuilder } //declare a variable that is equal to a copy of orderBuilder object inputs at the time the addCustomOrder function is called

    //Add new primary key to the object (creating new id)
    const lastIndex = database.customOrders.length - 1  //not sure why the length of the customerOrders is needed to subtract 1 from then use below?

    newOrder.id = database.customOrders[lastIndex].id + 1  //creates a id for the orderBuilder object which up to this point only contains metalId/styleId/sizeId 
    //add an id key to the new orderBuilder object that has been provided

    //add time stamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))  //don't understand nomenclature (new CustomEvent?)

    //do I need to import this function to the main in order for it to work properly?

}