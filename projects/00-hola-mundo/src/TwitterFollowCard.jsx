//AQUI SE CREA EL COMPONENTE
//-----------------------------------------------------------------------------------------------------------------------
import { useState } from "react"
//este hook nos permite crear una variable que nos permita saber si estamo o no siguientedo al usuario
export function TwitterFollowCard({ formatUserName, userName, children, initialIsFollowing }) {
    //LA CONSTANTE PARA SABER SI SEGUIMOS AL USUARIO O NO:
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    //Se pasa el isFollowing para indicar que sigues al usuario cada vez q entras en la web
    //en el array pasamos el valor inicial y en el otro el cambio, ejemplo de la luz del cuarto, isFollowing = luz apagada, setIsFollowing = interruptor
    //-----------------------------------------------------------------------------------------------------------------------
    //Creamos la funcion para cambiar el estado del boton, cambiar de seguir a siguiendo con una funcion interna
    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }
    //--------------------------------------------------------------------------------------------------------------------
    //SI SE DA EL CASO QUE NO RECIBIMOS DATOS EN LOS PARAMETROS LE PODEMOS ESPECIFICAR VALORES POR DEFECTO COMO POR EJEMPLO: userName = `unknown'
    //El children es un bloque que dentro tiene elementos como puede ser texto o elementos html
    //-----------------------------------------------------------------------------------------------------------------------
    //Creamos formatUserName para el arroba y luego lo ponemos donde este nuestro elemento de la siguiente forma:
    // {formatuserName(userNameName)}</span>
    //-----------------------------------------------------------------------------------------------------------------------
    //OTRA FORMA PARA LO DEL USER NAME EN EL SPAN ES ASI: 
    //SIN EL PARAMETRO formatUserName
    // <span className='tw-followCard-infoUserName'>@{userName}</span
    //-------------------------------------------------------------------------------------------------------------------
    //otro caso para la imagen es crear una constante:
    const imageSrc = `https://encrypted-tbn0.gstatic.com/${userName}images?q=tbn:ANd9GcR5BuUWH_vmiIAqFXHT62I8hSAFaX3hFhzudvowyL9Ffli7kpxVKUt0XeSW4vKK4N-IrRY&usqp=CAU`
    //ESTADOS:
    //DEBEMOS CREAR LAS SIGUIENTES CONSTATES:
    //eso es como un if, basicamente va a cambiar el contendio del boton si lo estamos siguiendo o no
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    //CAMBIAR ESTILOS AL DARLE AL SEGUIR, HACEMOS LO SIGUIENTE:
    const buttonClassName = isFollowing
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'
    //De esta manera podremos aislar el boton y cambiarle el estilo cuando este cambie de estado, debemos indicar la variable en el className de nuestro boton
    return (
        // es importante especificar los className para que no haga comflicto con otros componentes, 
        //debemos poner los nombre de las clases en el css de nuestra App.css luego
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                    //en el tema de la imagen debemos crear la plantilla
                    className='tw-followCard-avatar'
                    // ponemos la varibale de la constantela variable
                    src={imageSrc}
                    alt="john Doe" />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="tw-followCard-text">{text}</span>
                    <span className="tw-followCard-stopFollow"> Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )

}