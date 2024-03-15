const About = () => {
    return (
        <div>
            <h1>Sobre el Creador - About</h1>

            <div className="containerAbout">
                {/* Imagen */}

                <img src="./img/fondoAbout.webp" alt="fondo About" width="500" height="600"/>


                {/* Texto */}
                <p>
                    Este es una pagina sobre Rick and Morty a modo de practica las bases FRONT END en react usando las tecnologias de Javascript,
                    React, Read-Router-Dom y Redux.
                </p>
            </div>
        </div>
    )
}

export default About;