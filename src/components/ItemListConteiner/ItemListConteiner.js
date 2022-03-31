const ItemListConteiner = (props) => {
    console.log(props.greeting)
    return (
        <h1 class="text-center fw-bold">{props.greeting}</h1>
    )
}

export default ItemListConteiner