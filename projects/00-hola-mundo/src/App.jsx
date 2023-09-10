//AQUI SE LLAMA A NUESTRO COMPONENTE
//-----------------------------------------------------------------------------

//debemos exportar el componente a nuestro main jsx
//si se quieren añadir estilos en este jsx deben ser objetos osea style = {{display: 'none'}}
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard';
//esto es un componente ya creado osea el resultado de lo que hemos hecho en TwitterFollowCard, por asi decir aqui llamamos a TwitterFollowCard
//Con el tema del arroba podemos crear una constante en la cual le pasamos el parametro userName de TwitterFollowCard
//Y luego se lo indicamos aqui debajo en los elementos de nuestra seccion como nombreDelAvariable = {parametro}
//---------------------------------------------------------------------------------------------------------
/*RENDERIZAR LISTAS
const users = [
    {
        userName: 'OhioObssesedGuy',
        name: 'John Doe',
        isFollowing: false
    },
    {
        userName: 'JuanitoOjayo',
        name: 'Junaito',
        isFollowing: true
    },
    {
        userName: 'StinkyGuy',
        name: 'Joaquim',
        isFollowing: false
    },
    {
        userName: 'JosuaToxik',
        name: 'Josua',
        isFollowing: true
    }
]*/


export function App() {
    const formatUserName = (userName) => `@${userName}`
    return (
        //LE DEBEMOS PASAR LOS PARAMETROS A NUESTRA FUNCION ESTO HACE REFERENCIA AL userName de fllowCard.jsx
        //para pasar los props booleanos que hemos creado en followCard debemos poner {nombreDelParametro}=true
        //tambein podemos dejar solo el isFollowing tal cual y se pondra en true
        //este className hace referencia a el css global que contiene la clase App que es nuestro subcomponente
        // ESTA ES OTRA FORMA SIN EL FORMAT USER NAME <TwitterFollowCard isFollowing={true} userName="OhioObssesedGuy" name="John Doe" />
        //---------------------------------------------------------------------------------------------------------
        //Le quito el isFollowing ya qu quiero que sea un estado 
        <section className='App'>
            {/* MAPEAR ELEMENTOS DE UNA LISTA
                {
                users.map(({ userName, name, isFollowing })user => {
                        <TwitterFollowCard 
                        key={userName}  usar como key el elemento unico que no se repita, id de BBDDD
                        userName={userName} 
                        initialIsFollowingis={isFollowing}
                        >
                        {name}
                        </TwitterFollowCard> 
                    ))
                }
            */}
            
            
            
            <TwitterFollowCard formatUserName={formatUserName} userName="OhioObssesedGuy" initialIsFollowing={true}>
                John Doe
            </TwitterFollowCard>
            <TwitterFollowCard formatUserName={formatUserName} userName="juanito" >
                JuanitoOjayo
            </TwitterFollowCard>
            <TwitterFollowCard formatUserName={formatUserName} userName="StinkyGuy" >
                Joaquim
            </TwitterFollowCard>
            <TwitterFollowCard formatUserName={formatUserName} userName="JosuaToxik" >
                Josuaa
            </TwitterFollowCard>
        </section>
    );
}