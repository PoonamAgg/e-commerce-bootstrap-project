import React from 'react'

const productsArr = [

    {
        productId:"1",
    
    title: 'Album 1',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    },
    
    {
        productId:"2",
    
    title: 'Album 2',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    },
    
    {
    
        productId:"3",
    title: 'Album 3',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    },
    
    {
        productId:"4",
    
    title: 'Album 4',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    
    }
    
    ];

const ProductContext = React.createContext({
    productsArr: []
})

 export const ProductProvider = (props) => {
return (
    <ProductContext.Provider value={{productsArr:productsArr}}>
        {props.children}
        </ProductContext.Provider>
)
}

export default ProductContext