import { useAtom, useAtomValue } from "jotai"
import { cartAtom ,cartItemQuantityAtom,orderSummaryAtom} from "../atoms"

export function useCart(){
    const [cartItems,setCartItems]=useAtom(cartAtom)
    const cartItemQuantity = useAtomValue(cartItemQuantityAtom)
    const {subtotal,total,tax,shipping}=useAtomValue(orderSummaryAtom)
function deleteDishFromCart(dish){

    const filteredItems=cartItems.filter(
        cartItem=> cartItem.dish.id!==dish.id
    )
    setCartItems(filteredItems)
}

function addDishesToCart(dish){
    const currentCartItem=cartItems.find(cartItem => cartItem.dish.id === dish.id)
    if(currentCartItem){
        const updatedCartItems= cartItems.map (cartItem => {
            if(cartItem.dish.id === dish.id){
                return{...cartItem,quantity:cartItem.quantity + 1}
            }
            return cartItem
        })

        setCartItems(updatedCartItems)
        return 
    }
    setCartItems(prevValue => [...prevValue,{dish:dish,quantity:1}])
}

function updateCartItemQuantity(dish,quantity){
    const updatedCartItems=cartItems.map(cartItem=>{
        if(cartItem.dish.id===dish.id && quantity>=1){
           
            return{...cartItem,quantity:parseInt(quantity)}
        }
        return cartItem;
       
    })
    setCartItems(updatedCartItems)
}


return {updateCartItemQuantity,addDishesToCart,cartItemQuantity,deleteDishFromCart,subtotal,total,tax,shipping}
}
