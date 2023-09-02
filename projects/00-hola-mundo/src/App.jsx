//debemos exportar el componente a nuestro main jsx
//si se quieren añadir estilos en este jsx deben ser objetos osea style = {{display: 'none'}}

import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard';

export function App() {
    return (
        //LE DEBEMOS PASAR LOS PARAMETROS A NUESTRA FUNCION
        <>
            <TwitterFollowCard userName="OhioObssesedGuy" name="John Doe" />
        </>
        
    );
}