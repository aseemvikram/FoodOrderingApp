import { atom } from "jotai";
 
export const cartAtom = atom(
    [
    ]);

export const cartItemQuantityAtom = atom(get => {
    const cartItems = get(cartAtom)
    const totalQuantity = cartItems.reduce((total, cartItem) => {
        return total + parseInt(cartItem.quantity)
    }, 0)
    return totalQuantity

})

export const orderSummaryAtom=atom(get=>{
    const cartItems =get(cartAtom)
    const subtotal=cartItems.reduce(
        (total,cartItem)=>total+ cartItem.dish.price * cartItem.quantity,0

    )
    const tax = subtotal*0.18
    const shipping = subtotal * 0.5
    const total= subtotal+tax+shipping
    return{subtotal,total,tax,shipping}
})