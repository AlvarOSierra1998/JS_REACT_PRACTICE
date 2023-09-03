//AQUI SE LLAMA A NUESTRO COMPONENTE
//-----------------------------------------------------------------------------

//debemos exportar el componente a nuestro main jsx
//si se quieren añadir estilos en este jsx deben ser objetos osea style = {{display: 'none'}}
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard';
//esto es un componente ya creado osea el resultado de lo que hemos hecho en TwitterFollowCard, por asi decir aqui llamamos a TwitterFollowCard
//Con el tema del arroba podemos crear una constante en la cual le pasamos el parametro userName de TwitterFollowCard
//Y luego se lo indicamos aqui debajo en los elementos de nuestra seccion como nombreDelAvariable = {parametro}
export function App() {
    const formatUserName = (userName) => `@${userName}`
    return (
        //LE DEBEMOS PASAR LOS PARAMETROS A NUESTRA FUNCION ESTO HACE REFERENCIA AL userName de fllowCard.jsx
        //para pasar los props booleanos que hemos creado en followCard debemos poner {nombreDelParametro}=true
        //tambein podemos dejar solo el isFollowing tal cual y se pondra en true
        //este className hace referencia a el css global que contiene la clase App que es nuestro subcomponente
        <section className='App'>
            <TwitterFollowCard formatUserName = {formatUserName} 
            isFollowing={true} userName="OhioObssesedGuy" name="John Doe" />
            <TwitterFollowCard formatUserName = {formatUserName} isFollowing={false} userName="juanito" name="JuanOjayo" />
            <TwitterFollowCard formatUserName = {formatUserName} isFollowing userName="StinkyGuy" name="Joaquim " />
            <TwitterFollowCard formatUserName = {formatUserName} isFollowing userName="JosuaToxik" name="Josua" />
        </section>
        
    );
}