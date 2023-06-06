
/*

CLASE 5: COMPONENTES 2. 

Recordemos.. ¿Qué es un componente? 
Conjunto de elementos que cumplen una misma función en la interfaz del usuario. 

CICLO DE VIDA DE LOS COMPONENTES: Una serie de estados por lo cuales pasa todo componente a lo largo de su existencia. 

- Montaje. 
- Actualización. 
- Desmontaje. 








*/

import Contador from "./componentes/Contador/Contador"
import Categorias from "./componentes/Categorias/Categorias"
import UseRef from "./componentes/UseRef/UseRef"
import UseRefDom from "./componentes/UseRefDom/UseRefDom"
import Temporizador from "./componentes/Temporizador/Temporizador"

const App = () => {
  return (
    <div>
      <Contador stock={10} inicial={1}/>
      <Categorias/>
      <UseRef/>
      <UseRefDom/>
      <Temporizador/>
    </div>
  )
}

export default App