const CartWidget = (props) => {
    console.log(props)
    return (
        <div>
            <a><img src={'./carrito.png'}></img></a>
            <span  class="badge bg-primary">0</span>
        </div>
    )
}

export default CartWidget