//AQUI SE CREA EL COMPONENTE
//-----------------------------------------------------------------------------------------------------------------------
export function TwitterFollowCard({formatUserName, userName, name, isFollowing}) {
    //Creamos formatUserName para el arroba y luego lo ponemos donde este nuestro elemento de la siguiente forma:
    // {formatuserName(userNameName)}</span>
    //-------------------------------------------------------------------------------------------------------------------
    //otro caso para la imagen es crear una constante:
    const imageSrc = `https://encrypted-tbn0.gstatic.com/${userName}images?q=tbn:ANd9GcR5BuUWH_vmiIAqFXHT62I8hSAFaX3hFhzudvowyL9Ffli7kpxVKUt0XeSW4vKK4N-IrRY&usqp=CAU`
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
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
                </div>
            </header>
            <aside>
                <button className='tw-followCard-button'>
                    Seguir
                </button>
            </aside>
        </article>
    )

}