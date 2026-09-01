

function Sobre(){


    return(
        <section className="container sobre" id="sobre">
            <h1>Sobre o jogo:</h1>
            <div className="cards">
                <div className="card">
                    <img src="/groups.png" alt="multiplayer" />
                    <h2>Multiplayer</h2>
                </div>
                
                <div className="card">
                    <img src="/game-control.png" alt="multiplataforma" />
                    <h2>Jogue em qualquer plataforma</h2>
                </div>

                <div className="card">
                    <img src="/star.png" alt="favoritos" />
                    <h2>Desafios toda semana!</h2>
                </div>
            </div>
        </section>
    )
}

export default Sobre;