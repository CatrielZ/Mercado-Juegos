# GAME ROOM
## Ecommerce de Videos Juegos 
**Zeeb Catriel Labat 👻**
> El proyecto se basa en un Ecommerce que se encarga en vender
> video juegos, para el curso de React Js. El proyecto se llama Game room.
> Se podra navegar entre categorias, ver el detalle de cada producto, 
> chequear el carrito y comprar los  productos elejidos.

# ¿Como Empezar?
## Instalar git clone
 Para poder accerder al proyecto clonandolo, debera escribir en la terminal:
 ```
   git clone  https://github.com/CatrielZ/Mercado-Juegos.git
   npm install 
   npm start
```
## Instalar download Zip
```
Dentro del proyecto ir a "code" > download Zip
Descarga y descomprimir el archivo.
Llamar a la terminal en la carpeta "mercadojuegos":
npm install
npm start
```

# ¿Como se trabajo?
### Tecnologias 🛠️:
- React JS
- JavaScript
- CSS
- Html
- Amor ❤️
- Firebase
### Se utilizo 📙:
- React-router-dom
- Styled-component
- Sweetalert2
- React-Firebase
- React-toastify
- Bootstrap
- React-social-icons

## ¿Como Funcionan los componentes?
Lo primero que veremos al entrar en ***Game Room*** es el ***NavBar***, este 
tendra 2 opciones *"Productos"* y *"Genero"*, este mismo permitira filtrar  las categorias y tambien se encuentra el carrito, el ***CartWidget*** mostrara  la cantidad de objetos seleccionados para la comprar.Desde *"Genero"* tambien podras acceder a los diferentes productos contenidos en ***ItemListContainer*** que a su vez contiene a ***ItemList*** que a su vez contiene tambien a ***Item*** luego desde aqui podras acceder al detalle y compra de los productos a traves de ***ItemDetailContainer*** que contiene a su vez a ***ItemDetail***. Podrás ver algunos detalles mas de cada juego, conocer su decripción, su precio, cuánto tenemos de stock, categoria, etc. Desde aquí mismo podrás añadir la cantidad  que quieras a tu carrito gracias al componente ***ItemCount***. Este  permitirá agregar productos a tu carrito.

Podras ver tu carrito despues de realizar la compra o tambien al hacer click en el ***CartWidget*** en nuestro ***NavBar***, te llevara al resumen de tus compras realizadas hasta el momento, que es traido por el ***Cart*** que a su vez contiene al ***ItemCart*** usando su ***CartContext***.

Dentro del carrito, prodras quitar productos o vaciar el carrito.
En el caso de querer continuar con la compra, dándole click a finalizar compra, la web te redireccionará a ***Form*** donde deberás completar tus datos, y en el caso de que los mails estén iguales el botón será habilitado para generar la orden y automáticamente se cargará tu id de compra. Despues obtener el codigo de compra, podras volver al Inicio.

# Previsualización
![image](https://github.com/CatrielZ/Mercado-Juegos/blob/main/Gif/Previsualización.gif)
# CartContext
🕹️ ***addItem*** : Añade el producto al carrito. En el caso de que el producto  ya esté en el carrito, esta función va a evitar que se genere otra línea de *ItemCart*, solo modificará la cantidad de dicho producto.

🕹️***getQuantity*** : Esta función permite que cuando agregas productos al carrito se muestre la cantidad en el *CartWidget*.

🕹️ ***isInCart***: Reconoce si el producto está o no en el carrito.

🕹️ ***clearCart***: Esta función está asociada al botón de vaciar carrito y limpiará todo lo que se encuentre en el.

🕹️ ***removeItem***: Esta función removerá el producto con ese id y seteará el nuevo valor del CartWidget.

🕹️***getQuantityProd***: Esta función se utiliza en ItemDetail para guardar la cantidad que seleccionás de ese producto en el contador.

🕹️ ***totalCost***: Esta función calcula el valor total de la compra.

# 👾 Gracias por leer,  ahora a viciarla!👾 