const products = [
    { 
    id: '1',
    name: 'DOOM Eternal',
    price: 2500,
    category: 'Shooter', 
    img:'https://www.gamesfull.org/almacenamiento/2020/06/doom-eternal-12757-poster.jpg',
    stock: 50, 
    description: ' Los ejércitos del infierno han invadido la Tierra. Ponte en la piel del Slayer en una épica campaña para un jugador y cruza dimensiones aniquilando demonios para detener la destrucción definitiva de la humanidad. No Le Tienen Miedo A Nada… Salvo A Ti. Disfruta de la mejor combinación de velocidad y potencia en DOOM Eternal, que trae un salto cualitativo del combate en primera persona.'
    },
    { 
    id: '2', 
    name: 'Divinity Original Sin 2', 
    price: 500, 
    category: 'Rpg', 
    img: 'https://www.gamesfull.org/almacenamiento/2020/06/divinity-original-sin-2-definitive-edition-6983-poster.jpg',
    stock: 50, 
    description: 'Es un juego de rol de mundo abierto de la nueva generación, cuyo elemento principal es la narrativa, desarrollado en un mundo en expansión con una historia que reacciona a quién eres y a lo que has hecho. Juega en la piel de uno de los seis originales personajes de origen, con sus respectivas misiones propias, o crea un personaje y atribúyele rasgos para definir tu propia aventura. Los dioses han abandonado Rivellon, pero solo una persona de tu grupo tendrá la oportunidad de convertirse en Divino.'
    },
    { 
    id: '3', 
    name: 'State of Decay 2 Juggernaut Edition', 
    price: 700, 
    category: 'Survivor',
    img: 'https://www.gamesfull.org/almacenamiento/2020/06/state-of-decay-2-juggernaut-edition-5378-poster.jpg',
    stock: 50, 
    description: 'En State of Decay 2, tu base es mucho más que un lugar para que los supervivientes duerman por la noche. Es tu santuario, que ofrece protección contra los hambrientos muertos que acechan más allá del muro. Es tu puesto de mando, donde planeas la estrategia perfecta para matar zombis. Y sobre todo, es una manifestación de tus estrategias personales de supervivencia a largo plazo, que personalizas con tus instalaciones y mejoras idóneas. ¿Construirás una atalaya o plantarás un jardín? ¿Una enfermería o un taller? ¿Cómo decidirás labrar una pequeña civilización en las cenizas de un caótico apocalipsis?'
    }
    
]

const categories = [
    {id: 'Shooter', description: 'Shooter'},
    {id: 'Rpg', description: 'Rpg'},
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


