import { useState, useEffect } from "react";

//El efecto primario de React es renderizar componentes manipulando el DOM. Pero una aplicación web tiene que hacer mucho más que solo mostrarse, tiene que realizar operaciones, consumir datos de servidores, usar eventos, etc. 

//Para lograr esto (controlar los efectos secundarios) usamos el Hook useEffect. 

//Con este Hook le digo a React "Hace más cosas además de solo renderizar el componente".
//UseEffect me permite controlar todos los cambios secundarios provocados por el cambio de estado. 





const Contador = ({stock, inicial}) => {
    const [contador, setContador] = useState(inicial);
    const [color, setColor] = useState("black");

    useEffect( () => {
        document.title = `Contador: ${contador}`
        //Y si cuando el contador llega a 5 me cambia el color del botón a rojo??
        /*
        if(contador === 5){
            document.getElementById("boton").style.color = "red";
        }
        */
        //Esto no es lo más recomendado porque estoy accediendo directamente al DOM. Y no se considera una buena práctica. Mejor es usar el estado para cambiar el color del botón, realizando lo siguiente: 
        if(contador > 5) {
            setColor("red");
        } else {
            setColor("black");
        }

    }, [contador])

    const aumentarContador = () => {
        if(contador < stock) {
            setContador(contador + 1);
        }
    }

    const disminuirContador = () => {
        if(contador > inicial) {
            setContador(contador - 1);
        }
    }
  return (
    <div>
        <h2>Contador</h2>
        <button onClick={ disminuirContador }> - </button>
        <strong> {contador} </strong>
        <button onClick={ aumentarContador}> + </button>

        <button id="boton" style={{color: color}}> Agregar al Carrito </button>
    </div>
  )
}

export default Contador