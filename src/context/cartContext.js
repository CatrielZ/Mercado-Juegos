import { createContext, useState } from "react";


const CartContext = createContext()

export const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    console.log(cart)

    const addItem = (productToAdd) => {
        if(!isInCart (productToAdd.id)){
            setCart([...cart, productToAdd])
        } else {
            const newProducts = cart.map(prod => {
                if(prod.id === productToAdd.id){
                    const newProducts  = {
                        ...prod,
                        quantify : productToAdd.quantify
                    }
                    return newProducts;
                } else {
                    return prod
                }
            })
            setCart(newProducts)
        }
            
        }

    const getQuantity = () => {
        let count = 0
        cart.forEach(prod => {
            count += prod.quantify
        })
        return count
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id )
    }

    const clearCart = () => {
        setCart([])
    }

    const removeItem = (id) => {
        const products = cart.filter(prod => prod.id !== id)
        setCart(products)
    }

    const getQuantityProd = (id) => {
        return cart.find (prod => prod.id === id)?.quantify
    }

    const totalCost = () => {
        let totalCost = Object.values(cart).reduce((acc, {quantify, price}) => acc + quantify * price,0)
        return totalCost
    }

    /*const finishBuy = () => {
        let finishBuy = alert('Buy completed')
        return finishBuy
    }*/

    return (
        <CartContext.Provider value={{
            cart,
            addItem, 
            getQuantity, 
            isInCart,
            clearCart,
            removeItem,
            getQuantityProd, 
            totalCost
           // finishBuy
        }}>
            {children}
        </CartContext.Provider>
    )
    }
   
export default CartContext