
//UseRef es un hook que me permite crear una referencia mutable que puede ser actualizada sin provocar una nueva renderización del componente. 

import { useRef } from "react"

//"referencia mutable" significa que puedo cambiar el valor de un objeto. 

//Ejemplo. cantidad de productos. 

const UseRef = () => {

    const productosMarolio = useRef(0);

    //Este hook retorna un objeto con una propiedad llamada "curret" la cual podemos mutar. 
    const agregarAlCarrito = () => {
        productosMarolio.current = productosMarolio.current + 1;
        console.log(productosMarolio.current);
    }

  return (
    <div>
        <p>Productos Marolio en el Carrito: {productosMarolio.current} </p>
        <button onClick={ agregarAlCarrito }> Agregar al Carrito Marolio </button>
    </div>
  )
}

export default UseRef