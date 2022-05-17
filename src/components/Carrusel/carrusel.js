

const IndexCarrucel = () => {
    return (
        <div className="m-2 text-center">
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div className="colorText text-center m-5">
                <h1> Tu Tienda online</h1>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://www.gamesfull.org/almacenamiento/2020/06/2-Borderlands-3.jpg" class="d-block w-100"/>
                </div>
                <div class="carousel-item">
                    <img src="https://www.gamesfull.org/almacenamiento/2020/06/1-DOOM-Eternal.jpg" class="d-block w-100"/>
                </div>
                <div class="carousel-item">
                    <img src="https://www.gamesfull.org/almacenamiento/2020/06/2-Divinity-Original-Sin-2-Definitive-Edition.jpg" class="d-block w-100"/>
                </div>
                <div class="carousel-item">
                    <img src="https://www.gamesfull.org/almacenamiento/2020/12/3-Outward.jpg" class="d-block w-100"/>
                </div>
                <div class="carousel-item">
                    <img src="https://www.gamesfull.org/almacenamiento/2020/06/4-State-of-Decay-2-Juggernaut-Edition.jpg" class="d-block w-100"/>
                </div>
                <div class="carousel-item">
                    <img src="https://www.gamesfull.org/almacenamiento/2020/05/Half-Life-2-The-Orange-Box-3.jpg" class="d-block w-100" />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
            </button>
        </div>
        </div>
    )

}

export default IndexCarrucel;