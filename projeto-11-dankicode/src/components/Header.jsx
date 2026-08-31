

function Header(){


    return(
        <section className="header">
            <header className="container">
                <div className="logo-marca">
                    <img src="/logo.png" alt="logo marca" />
                </div>

                <nav>
                    <a href="#sobre">Sobre</a>
                    <a href="#depoimentos">Depoimentos</a>
                    <button>BAIXAR AGORA!</button>
                </nav>

                
            </header>
        </section>
    )
}

export default Header;