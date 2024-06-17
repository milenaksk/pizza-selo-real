import React, { createContext, useState } from "react"; //cria o contexto global para o carrinho
import { productsArray, getProductData } from "../pizzas";  //importa os dados das pizzas, preço, tipo e pedaços para alimentar o context

//gerencia o carrinho com opcao de adicionar, remover, calcular preco total do carrinho e quantidade
export const CartContext = createContext({
    items: [],
    getProductQuantity: () => {},
    addOneToCart: () => {},
    removeOneFromCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {}
});

export function CartProvider({children}) {
    const [cartProducts, setCartProducts] = useState([]);

    function getProductQuantity(id) {
        const quantity = cartProducts.find(product => product.id === id)?.quantity;
        return quantity || 0;
    }

    function addOneToCart(id) {
        const quantity = getProductQuantity(id);

        if (quantity === 0) {
            setCartProducts([...cartProducts, { id, quantity: 1 }]);
        } else {
            setCartProducts(
                cartProducts.map(product =>
                    product.id === id
                    ? { ...product, quantity: product.quantity + 1 }
                    : product
                )
            );
        }
    }

    function removeOneFromCart(id) {
        const quantity = getProductQuantity(id);

        if (quantity === 1) {
            deleteFromCart(id);
        } else {
            setCartProducts(
                cartProducts.map(product =>
                    product.id === id
                    ? { ...product, quantity: product.quantity - 1 }
                    : product
                )
            );
        }
    }

    function deleteFromCart(id) {
        setCartProducts(cartProducts.filter(product => product.id !== id));
    }

    function getTotalCost() {
        if (cartProducts.length === 0) {
            return 0;
        }
        return cartProducts.reduce((totalCost, cartItem) => {
            const productData = getProductData(cartItem.id);
            if (productData) {
                return totalCost + (productData.price * cartItem.quantity);
            }
            return totalCost;
        }, 0);
    }

    const contextValue = {
        items: cartProducts,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost
    };

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
}
