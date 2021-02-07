import React from 'react'

export default function Header() {
    return (
       
            <header className="row">
            <div>
                <a className="brand" href="/">Servicio <b>Tec</b></a>
            </div>
            <div>
                <a href="/cart">Carrito</a>
                <a href="/signin">Iniciar sesion</a>
            </div>
        </header>
        
    )
}
