
function Header(){

    return(
        <header>
            <nav className="top-header">
                <p>🔥Envío gratis en compras $50+</p>
            </nav>
            <div className="title"><h1>ETERNAL FLAME</h1></div>
            <span className="side-icons">
                <i class="fas fa-user"></i>
                <i class="fas fa-search"></i>
                <i class="fas fa-shopping-cart"></i>
            </span>
            <div className="header-menu">
                <div className="dropdown-menu">
                    <button className="menu-botton"><a href="velas.jsx">velas</a></button>
                    <div class="dropdown-content">
                        <a href="aroma.jsx">vela aromática</a>
                        <a href="vara.jsx">vela de vara</a>
                        <a href="deco.jsx">vela decorativa</a>
                        <a href="regalo.jsx">caja de regalo</a>
                    </div>
                </div>
                <div className="dropdown-menu">
                    <button className="menu-botton"><a href="aceite.jsx">aceite</a></button>
                </div>
                <div className="dropdown-menu">
                    <button className="menu-botton"><a href="nosotros.jsx">nosotros</a></button>
                </div>
                <div className="dropdown-menu">
                    <button className="menu-botton"><a href="contacto.jsx">contacto</a></button>
                </div>
            </div>
        </header>
    );
}

export default Header