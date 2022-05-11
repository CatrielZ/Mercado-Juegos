const products = [
    {}   
]
const categories = [
    {id: 'Shooter', description: 'Shooter'},
    {id: 'Rpg', description: 'Rpg'},
    {id: 'Lucha', description: 'Lucha'},
    {id: 'Survivor', description: 'Survivor'}
]

export const getCategories = () => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(categories)
        }, 500)
    })
}


export const getProducts = (categoryId) => {
    return new Promise ((resolve, reject) => {
        const ok = true;
            setTimeout(() => {
                if (ok){
                    resolve(categoryId ? products.filter(prod => prod.category === categoryId) : products);
                } else {
                    reject('error');
                }
            }, 500);
    })
}

export const getProductsById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}



