import NavBar from "../NavBar/NavBar"

const CartWidget = (props) => {
    console.log(props)
    return (
        <div>
            <a><img src="https://cdn-icons-png.flaticon.com/512/116/116356.png" height="23" width="24"></img></a>
            <span  class="badge bg-primary">0</span>
        </div>
    )
}

export default CartWidget;