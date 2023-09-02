export function TwitterFollowCard({userName, name, isFollowing}) {
    //otro caso para la imagen es crear una constante
    /*
    const imageSrc = `https://linkImagen.com/${userName}`
    y dentro del src le ponemos la variable
    */
    
    return (
        // es importante especificar los className para que no haga comflicto con otros componentes, 
        //debemos poner los nombre de las clases en el css luego
        
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                //en el tema de la imagen debemos crear la plantilla
                    className='tw-followCard-avatar'
                    src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4704a75a-3db0-45b3-863f-474417cdfdf7/df05vwt-667dc45d-8a41-4e3c-b86d-3f8927307b6e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQ3MDRhNzVhLTNkYjAtNDViMy04NjNmLTQ3NDQxN2NkZmRmN1wvZGYwNXZ3dC02NjdkYzQ1ZC04YTQxLTRlM2MtYjg2ZC0zZjg5MjczMDdiNmUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.13sbygqtAfVfOkrzo88EQ43V_ckbkbMChrrEhYPaeeI"
                    alt="john Doe" />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
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